import type { Metadata } from 'next';

import React from 'react';

import { CatalogPage } from '@/pages_';

export const metadata: Metadata = {
	title: 'Каталог товаров',
	description: 'Каталог наших товаров',
};

function Catalog() {
	return <CatalogPage />;
}

export default Catalog;
