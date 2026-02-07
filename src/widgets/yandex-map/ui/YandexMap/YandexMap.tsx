'use client';

import React, { useEffect, useRef, useState } from 'react';





interface YandexMapProps {
	center?: [number, number];
	zoom?: number;
	className?: string;
}

const YandexMap: React.FC<YandexMapProps> = ({
	center = [30.322980173610603, 59.938585304767734], // Санкт-Петербург по умолчанию
	zoom = 16,
	className,
}) => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		const loadYMaps = async () => {
			if (typeof window === 'undefined') return;

			if (window.ymaps) {
				setIsLoaded(true);
				return;
			}

			const script = document.createElement('script');
			script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YMAPS_API_KEY}&lang=ru_RU`;
			script.async = true;
			script.onload = () => {
				window.ymaps.ready(() => setIsLoaded(true));
			};
			document.head.appendChild(script);
		};

		loadYMaps();
	}, []);

	useEffect(() => {
		if (!isLoaded || !mapContainerRef.current) return;

		const { ymaps } = window;

		const initMap = () => {
			const map = new ymaps.Map(mapContainerRef.current as HTMLElement, {
				center, // v2.1 использует [lat, lon]
				zoom,
				controls: [], // Убираем лишние элементы управления
			});

			// Добавляем кастомный маркер
			const placemark = new ymaps.Placemark(
				center,
				{},
				{
					iconLayout: 'default#image',
					iconImageHref: '/assets/image/map-pin.png',
					iconImageSize: [57, 53],
					iconImageOffset: [-35, -45], // Центрируем по горизонтали и в самый низ по вертикали
				},
			);

			map.geoObjects.add(placemark);

			return map;
		};

		const map = initMap();

		return () => {
			if (map) {
				map.destroy();
			}
		};
	}, [isLoaded, center, zoom]);

	return (
		<div
			ref={mapContainerRef}
			className={className}
			style={{
				width: '100%',
				height: '100%',
				minHeight: '400px',
				...(!isLoaded && { backgroundColor: '#f0f0f0' }),
			}}
		>
			{!isLoaded && (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '100%',
					}}
				>
					Загрузка карты...
				</div>
			)}
		</div>
	);
};

export default YandexMap;
