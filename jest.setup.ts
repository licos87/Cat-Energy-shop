import '@testing-library/jest-dom/jest-globals';

import { jest } from '@jest/globals';
import React from 'react';

jest.mock('next/link', () => {
	return {
		__esModule: true,
		default: ({
			children,
			href,
			...props
		}: {
			children: React.ReactNode;
			href: string;
			[key: string]: unknown;
		}) => React.createElement('a', { href, ...props }, children),
	};
});
