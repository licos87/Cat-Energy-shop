import type { Metadata } from 'next';

import React from 'react';

import CatalogPage from '@pages_/catalog';

export const metadata: Metadata = {
	title: 'Каталог товаров',
	description: 'Каталог наших товаров',
};

export default function Catalog() {
	return <CatalogPage />;
}
