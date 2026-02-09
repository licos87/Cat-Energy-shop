'use client';

import React, { useEffect, useRef, useState } from 'react';



import classnames from 'classnames';



import styles from './YandexMap.module.css';


interface YandexMapProps {
	center?: [number, number];
	zoom?: number;
	className?: string;
}

const YandexMap: React.FC<YandexMapProps> = ({
	center = [37.61908, 55.75177],
	zoom = 14,
	className,
}) => {
	const mapContainerRef = useRef<HTMLDivElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		let script: HTMLScriptElement | null = null;

		const loadYMaps = async () => {
			if (typeof window === 'undefined') return;

			if (window.map) {
				setIsLoaded(true);
				return;
			}

			script = document.createElement('script');
			script.src = `https://api-maps.yandex.ru/2.1/?apikey=${process.env.NEXT_PUBLIC_YMAPS_API_KEY}&lang=ru_RU`;
			script.defer = true;
			script.onload = () => {
				window.ymaps.ready(() => setIsLoaded(true));
			};
			document.head.appendChild(script);
		};

		loadYMaps();

		return () => {
			if (script && document.head.contains(script)) {
				document.head.removeChild(script);
			}
		};
	}, []);

	useEffect(() => {
		if (!isLoaded || !mapContainerRef.current) return;

		const { ymaps } = window;

		const initMap = () => {
			const map = new ymaps.Map(mapContainerRef.current as HTMLElement, {
				center,
				zoom,
				controls: [],
			});

			const placemark = new ymaps.Placemark(
				center,
				{},
				{
					iconLayout: 'default#image',
					iconImageHref: '/assets/image/map-pin.png',
					iconImageSize: [57, 53],
					iconImageOffset: [-35, -45],
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
			className={classnames(styles.map, className)}
		>
			{!isLoaded && <div className={styles.fallback}>Загрузка карты...</div>}
		</div>
	);
};

export default YandexMap;
