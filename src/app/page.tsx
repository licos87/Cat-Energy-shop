import type { Metadata } from 'next';

import { JSX } from 'react';

import { HomePage } from '@/pages_/';

export const metadata: Metadata = {
	title: 'Cat Energy',
	description: 'Функциональное питание для котов',
};

export default function Home(): JSX.Element {
	return <HomePage />;
}
