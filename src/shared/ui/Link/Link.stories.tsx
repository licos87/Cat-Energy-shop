import type { Meta, StoryObj } from '@storybook/react-vite';

import { BrowserRouter } from 'react-router-dom';

import { Link } from './Link';

const meta = {
	title: 'shared/ui/Link',
	component: Link,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		to: {
			description: 'URL адрес для перехода',
			control: 'text',
		},
		children: {
			description: 'Содержимое ссылки',
			control: 'text',
		},
		size: {
			description: 'Размер шрифта',
			control: 'inline-radio',
			options: ['m', 'xs'],
		},
		icon: {
			description: 'Иконка перед текстом ссылки',
			control: { disable: true },
		},
		nowrap: {
			description: 'Отмена переноса строки внутри текста',
			control: 'boolean',
		},
	},
	args: {
		to: '/',
		children: 'Ссылка',
		size: 'm',
		nowrap: false,
	},
	decorators: [
		(Story) => (
			<BrowserRouter>
				<div style={{ padding: '20px' }}>
					<Story />
				</div>
			</BrowserRouter>
		),
	],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SizeXS: Story = {
	args: {
		size: 'xs',
		children: 'Ссылка маленького размера',
	},
};

export const WithIcon: Story = {
	args: {
		icon: <span style={{ marginRight: '8px', color: 'blue' }}>🔗</span>,
	},
};

export const NoWrap: Story = {
	args: {
		nowrap: true,
		children:
			'Очень длинная ссылка, которая не должна переноситься на новую строку даже если для нее недостаточно места',
	},
	decorators: [
		(Story) => (
			<BrowserRouter>
				<div
					style={{ padding: '20px', width: '200px', border: '1px solid #ccc' }}
				>
					<Story />
				</div>
			</BrowserRouter>
		),
	],
};
