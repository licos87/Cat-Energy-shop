'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import { Image } from 'next/dist/client/image-component';

import styles from './ImageSlider.module.css';

interface ImageSliderProps {
	before: string;
	after: string;
}

export function ImageSlider({ before, after }: ImageSliderProps) {
	const [position, setPosition] = useState(50);
	const [dragging, setDragging] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	const clamp = (num: number) => Math.max(8, Math.min(92, num));

	const clientToPercent = useCallback(
		(clientX: number) => {
			const rect = containerRef.current?.getBoundingClientRect();
			if (!rect) return position;
			return clamp(((clientX - rect.left) / rect.width) * 100);
		},
		[position],
	);

	const updateSlider = useCallback((newPos: number) => {
		setPosition(newPos);
	}, []);

	const onPointerDown = (e: React.PointerEvent) => {
		e.currentTarget.setPointerCapture(e.pointerId);
		setDragging(true);
		updateSlider(clientToPercent(e.clientX));
	};

	useEffect(() => {
		if (!dragging) return;
		const move = (e: PointerEvent) => updateSlider(clientToPercent(e.clientX));
		const up = () => setDragging(false);
		window.addEventListener('pointermove', move);
		window.addEventListener('pointerup', up);
		return () => {
			window.removeEventListener('pointermove', move);
			window.removeEventListener('pointerup', up);
		};
	}, [dragging, clientToPercent, updateSlider]);

	return (
		<div
			className={styles.container}
			ref={containerRef}
		>
			<div className={styles.afterLayer}>
				<Image
					src={after}
					alt="После"
					fill
					className={styles.image}
				/>
			</div>
			<div
				className={styles.beforeLayer}
				style={{
					clipPath: `inset(0 ${100 - position}% 0 0)`,
				}}
			>
				<Image
					src={before}
					alt="До"
					fill
					className={styles.image}
				/>
			</div>
			<div
				className={styles.sliderTrack}
				style={{ left: `${position}%` }}
			/>
			<button
				type="button"
				className={styles.sliderHandle}
				style={{ left: `${position}%` }}
				onPointerDown={onPointerDown}
			/>
		</div>
	);
}
