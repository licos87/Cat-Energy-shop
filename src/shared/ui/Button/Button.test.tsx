import { fireEvent, render, screen } from '@testing-library/react';
import { Route } from 'react-router-dom';

import { describe, expect, test, vi } from 'vitest';

import { PATH_PAGE, renderWithRouter } from '@shared/index';

import { Button } from './Button';

describe('Test Button', () => {
	test('Button should be render correctly', () => {
		render(<Button>Next</Button>);

		expect(screen.getByText('Next')).toBeInTheDocument();
	});

	test('Button should be disabled', () => {
		render(<Button disabled>Next</Button>);

		expect(screen.getByText('Next')).toBeDisabled();
	});

	test('When Button clicked, "onClick" function must be called', () => {
		const handleClick = vi.fn();
		render(<Button onClick={handleClick}>Next</Button>);

		fireEvent.click(screen.getByText('Next'));
		expect(handleClick).toHaveBeenCalled();
	});

	test('When Button is Link and clicked, it should be redirected to new page', () => {
		renderWithRouter(
			<>
				<Route
					element={<Button href={PATH_PAGE.registration}>Next</Button>}
					path={PATH_PAGE.root}
				/>
				<Route
					element={<div>Registration page</div>}
					path={PATH_PAGE.registration}
				/>
			</>,
		);

		expect(screen.getByText('Next')).toBeInTheDocument();
		expect(screen.queryByText('Registration page')).not.toBeInTheDocument();
		fireEvent.click(screen.getByText('Next'));
		expect(screen.queryByText('Next')).not.toBeInTheDocument();
		expect(screen.getByText('Registration page')).toBeInTheDocument();
	});
});
