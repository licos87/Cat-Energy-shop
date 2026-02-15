import type { Metadata } from 'next';

import React from 'react';

import dynamic from 'next/dynamic';

import { Skeleton } from '@shared/ui/Skeleton';

export const metadata: Metadata = {
	title: 'Каталог товаров',
	description: 'Каталог наших товаров',
};

const CatalogPage = dynamic(() => import('@pages_/catalog'), {
	loading: () => <Skeleton width='100%' height={480}/>,
});

function Catalog() {
	return <CatalogPage />;
}

export default Catalog;
