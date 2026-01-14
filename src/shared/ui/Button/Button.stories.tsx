import type { Meta, StoryObj } from '@storybook/react-vite';

import { BrowserRouter } from 'react-router-dom';

import { Button } from './Button';

const meta = {
	title: 'shared/ui/Button',
	component: Button,
	parameters: {
		layout: 'centered',
	},
	tags: ['autodocs'],
	argTypes: {
		children: {
			description: 'Содержимое кнопки',
			table: {
				type: { summary: 'ReactNode' },
			},
		},
		type: {
			description: 'Тип кнопки',
			table: {
				defaultValue: { summary: 'button' },
			},
			control: 'inline-radio',
		},
		size: {
			description: 'Размер шрифта и внутренних отступов кнопки',
			table: {
				defaultValue: { summary: 'm' },
			},
			control: 'inline-radio',
		},
		href: {
			description: 'URL адрес для кнопки ссылки',
		},
		theme: {
			description: 'Тема кнопки',
			table: {
				defaultValue: { summary: 'primary' },
			},
			control: 'inline-radio',
		},
		disabled: {
			description: 'Неактивное состояние кнопки',
			table: {
				defaultValue: { summary: 'false' },
			},
		},
		className: {
			description:
				'Добавление собственного класса для дополнительной стилизации',
		},
		width: {
			description: 'Ширина кнопки',
			table: {
				defaultValue: { summary: 'auto' },
			},
			control: 'inline-radio',
		},
		onClick: {
			description: 'Обработчик события click',
		},
	},
	args: {
		children: 'Button',
		type: 'button',
		size: 'm',
		theme: 'primary',
		disabled: false,
		className: '',
		width: 'auto',
	},
	decorators: [
		(Story) => (
			<BrowserRouter>
				<Story />
			</BrowserRouter>
		),
	],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		theme: 'primary',
	},
};

export const Secondary: Story = {
	args: {
		theme: 'secondary',
	},
};

export const Tertiary: Story = {
	args: {
		theme: 'tertiary',
	},
};

export const Blue: Story = {
	args: {
		theme: 'blue',
	},
};

export const Icon: Story = {
	args: {
		theme: 'icon',
		children: '📋',
	},
};

export const SizeSmall: Story = {
	args: {
		size: 's',
	},
};

export const SizeMedium: Story = {
	args: {
		size: 'm',
	},
};

export const SizeLarge: Story = {
	args: {
		size: 'l',
	},
};

export const WidthMax: Story = {
	args: {
		width: 'max',
	},
};

export const Disabled: Story = {
	args: {
		disabled: true,
	},
};

export const AsLink: Story = {
	args: {
		href: '/some-path',
	},
};
