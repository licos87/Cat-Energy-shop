import type { Metadata } from 'next';

import { JSX } from 'react';

import dynamic from 'next/dynamic';

export const metadata: Metadata = {
	title: 'Cat Energy',
	description: 'Функциональное питание для котов',
};

const HomePage = dynamic(() => import('../pages_/home'), {
	loading: () => <div>Загрузка...</div>,
});

export default function Home(): JSX.Element {
	return <HomePage />;
}
