import type { Metadata } from 'next';

import React from 'react';

export const metadata: Metadata = {
	title: 'Подбор программы',
	description: 'Анкета для подбора программы',
};

// TODO: вернуть dynamic import для FormPage
function Form() {
	return <div>Загрузка...</div>;
}

export default Form;
