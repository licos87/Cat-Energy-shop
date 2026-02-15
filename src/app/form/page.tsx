import type { Metadata } from 'next';

import React from 'react';

import dynamic from 'next/dynamic';

export const metadata: Metadata = {
	title: 'Подбор программы',
	description: 'Анкета для подбора программы',
};

const FormPage = dynamic(() => import('@pages_/form'), {
	loading: () => <div>Загрузка...</div>,
});

function Form() {
	return <FormPage />;
}

export default Form;
