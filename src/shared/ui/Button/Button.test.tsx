import { render, screen } from '@testing-library/react';

import { describe, expect, it } from '@jest/globals';

import { Button } from './Button';

describe('Button', () => {
	it('renders as button by default', () => {
		render(<Button>Click me</Button>);
		const el = screen.getByRole('button', { name: 'Click me' });
		expect(el.tagName).toBe('BUTTON');
	});

	it('renders as link when href is provided', () => {
		render(<Button href="/test">Go</Button>);
		const el = screen.getByRole('link', { name: 'Go' });
		expect(el).toHaveAttribute('href', '/test');
	});

	it('has type="button" by default', () => {
		render(<Button>Submit</Button>);
		const el = screen.getByRole('button', { name: 'Submit' });
		expect(el).toHaveAttribute('type', 'button');
	});

	it('applies disabled state on button', () => {
		render(<Button disabled>Disabled</Button>);
		const el = screen.getByRole('button', { name: 'Disabled' });
		expect(el).toBeDisabled();
	});

	it('renders children', () => {
		render(<Button>Child text</Button>);
		expect(screen.getByText('Child text')).toBeInTheDocument();
	});
});
