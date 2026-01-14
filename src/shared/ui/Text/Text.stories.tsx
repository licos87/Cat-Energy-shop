import type { Meta, StoryObj } from '@storybook/react-vite';

import { Text } from './Text';

const meta = {
	title: 'shared/ui/Text',
	component: Text,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		tag: {
			description: 'HTML-тег текстового элемента',
			control: 'select',
			options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
		},
		children: {
			description: 'Содержимое текстового элемента',
			control: 'text',
		},
		size: {
			description: 'Размер текста',
			control: 'select',
			options: ['xs', 's', 'm', 'l', 'xl'],
		},
		weight: {
			description: 'Насыщенность шрифта',
			control: 'select',
			options: ['bold', 'medium', 'regular', 'light', 'thin'],
		},
		theme: {
			description: 'Цветовая тема текста',
			control: 'select',
			options: ['primary', 'secondary', 'alert', 'action'],
		},
		className: {
			description: 'Дополнительный CSS-класс',
		},
		testId: {
			description: 'Идентификатор для тестирования',
		},
	},
	args: {
		tag: 'p',
		children: 'Пример текста',
		size: 'm',
		weight: 'regular',
		theme: 'primary',
	},
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paragraph: Story = {
	args: {
		tag: 'p',
	},
};

export const Heading1: Story = {
	args: {
		tag: 'h1',
		size: 'xl',
		weight: 'bold',
		children: 'Заголовок первого уровня',
	},
};

export const Heading2: Story = {
	args: {
		tag: 'h2',
		size: 'l',
		weight: 'bold',
		children: 'Заголовок второго уровня',
	},
};

export const Heading3: Story = {
	args: {
		tag: 'h3',
		size: 'm',
		weight: 'medium',
		children: 'Заголовок третьего уровня',
	},
};

export const TextXS: Story = {
	args: {
		tag: 'span',
		size: 'xs',
		children: 'Очень маленький текст',
	},
};

export const TextL: Story = {
	args: {
		tag: 'p',
		size: 'l',
		children: 'Большой текст',
	},
};

export const BoldText: Story = {
	args: {
		weight: 'bold',
		children: 'Жирный текст',
	},
};

export const Alert: Story = {
	args: {
		theme: 'alert',
		children: 'Текст предупреждения',
	},
};

export const Action: Story = {
	args: {
		theme: 'action',
		children: 'Текст действия',
	},
};
