/** @type {import('jest').Config} */
const config = {
	preset: 'ts-jest/presets/default-esm',
	testEnvironment: 'node',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^@shared/(.*)$': '<rootDir>/src/shared/$1',
		'^@entities/(.*)$': '<rootDir>/src/entities/$1',
		'^@feature/(.*)$': '<rootDir>/src/feature/$1',
		'^@widgets/(.*)$': '<rootDir>/src/widgets/$1',
		'^@pages_/(.*)$': '<rootDir>/src/pages_/$1',
		'^@app/(.*)$': '<rootDir>/src/app/$1',
	},
};

export default config;
