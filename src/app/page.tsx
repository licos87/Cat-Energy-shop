import type { Metadata } from 'next';

import React, { JSX } from 'react';

import dynamic from 'next/dynamic';

import { Skeleton } from '@shared/ui/Skeleton';

export const metadata: Metadata = {
	title: 'Cat Energy',
	description: 'Функциональное питание для котов',
};

const HomePage = dynamic(() => import('@pages_/home'), {
	loading: () => (
		<Skeleton
			width="100%"
			height={480}
		/>
	),
});

export default function Home(): JSX.Element {
	return <HomePage />;
}
