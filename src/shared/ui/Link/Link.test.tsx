import { render, screen } from '@testing-library/react';

import { describe, expect, it } from '@jest/globals';

import { Link } from './Link';

describe('Link', () => {
	it('renders with children', () => {
		render(<Link href="/test">Test link</Link>);
		const el = screen.getByRole('link', { name: 'Test link' });
		expect(el).toHaveAttribute('href', '/test');
	});

	it('renders with icon', () => {
		const icon = <svg data-testid="icon" />;
		render(
			<Link
				href="/icon"
				icon={icon}
			>
				With icon
			</Link>,
		);
		expect(screen.getByTestId('icon')).toBeInTheDocument();
		expect(screen.getByText('With icon')).toBeInTheDocument();
	});

	it('renders children text correctly', () => {
		render(<Link href="/about">About us</Link>);
		expect(screen.getByText('About us')).toBeInTheDocument();
	});
});
