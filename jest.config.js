/** @type {import('jest').Config} */
const config = {
	projects: [
		{
			displayName: 'backend',
			preset: 'ts-jest/presets/default-esm',
			testEnvironment: 'node',
			setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
			testMatch: ['<rootDir>/backend/**/*.test.ts'],
			moduleNameMapper: {
				'^@/(.*)$': '<rootDir>/src/$1',
				'^@shared/(.*)$': '<rootDir>/src/shared/$1',
				'^@entities/(.*)$': '<rootDir>/src/entities/$1',
				'^@feature/(.*)$': '<rootDir>/src/feature/$1',
				'^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
				'^@pages_/(.*)$': '<rootDir>/src/pages_/$1',
				'^@app/(.*)$': '<rootDir>/src/app/$1',
			},
		},
		{
			displayName: 'ui',
			preset: 'ts-jest/presets/default-esm',
			testEnvironment: 'jsdom',
			setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
			testMatch: ['<rootDir>/src/**/*.test.tsx'],
			moduleNameMapper: {
				'^@/(.*)$': '<rootDir>/src/$1',
				'^@shared/(.*)$': '<rootDir>/src/shared/$1',
				'^@entities/(.*)$': '<rootDir>/src/entities/$1',
				'^@feature/(.*)$': '<rootDir>/src/feature/$1',
				'^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
				'^@pages_/(.*)$': '<rootDir>/src/pages_/$1',
				'^@app/(.*)$': '<rootDir>/src/app/$1',
				'\\.module\\.css$': 'identity-obj-proxy',
			},
		},
	],
};

export default config;
