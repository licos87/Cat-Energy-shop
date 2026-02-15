import { render, screen } from '@testing-library/react';

import { describe, expect, it } from '@jest/globals';

import { Text } from './Text';

describe('Text', () => {
	it('renders with default tag (p)', () => {
		render(<Text>Hello</Text>);
		const el = screen.getByText('Hello');
		expect(el.tagName).toBe('P');
	});

	it('renders with custom tag', () => {
		render(<Text tag="h1">Heading</Text>);
		const el = screen.getByText('Heading');
		expect(el.tagName).toBe('H1');
	});

	it('renders with span tag', () => {
		render(<Text tag="span">Inline</Text>);
		const el = screen.getByText('Inline');
		expect(el.tagName).toBe('SPAN');
	});

	it('applies custom className', () => {
		render(<Text className="custom">Styled</Text>);
		const el = screen.getByText('Styled');
		expect(el).toHaveClass('custom');
	});

	it('renders children text', () => {
		render(<Text>Some text content</Text>);
		expect(screen.getByText('Some text content')).toBeInTheDocument();
	});
});
