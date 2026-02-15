import type { Metadata } from 'next';

import React, { JSX } from 'react';

import HomePage from '@pages_/home';

export const metadata: Metadata = {
	title: 'Cat Energy',
	description: 'Функциональное питание для котов',
};

export default function Home(): JSX.Element {
	return <HomePage />;
}
