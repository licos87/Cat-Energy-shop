import type { Metadata } from 'next';

import React from 'react';

import dynamic from 'next/dynamic';

export const metadata: Metadata = {
	title: 'Каталог товаров',
	description: 'Каталог наших товаров',
};

const CatalogPage = dynamic(() => import('../../pages_/catalog'), {
	loading: () => <div>Загрузка...</div>,
});

function Catalog() {
	return <CatalogPage />;
}

export default Catalog;
