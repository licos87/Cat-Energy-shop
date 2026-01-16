import type { Metadata } from 'next';

import React from 'react';

import { FormPage } from '@/pages_';

export const metadata: Metadata = {
	title: 'Подбор программы',
	description: 'Анкета для подбора программы',
};

function Form() {
	return <FormPage />;
}

export default Form;
