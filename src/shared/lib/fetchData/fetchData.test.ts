import {
	afterAll,
	beforeEach,
	describe,
	expect,
	it,
	jest,
} from '@jest/globals';

import { fetchData } from './fetchData';

describe('fetchData', () => {
	const mockUrl = '/test-endpoint';
	const consoleSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

	beforeEach(() => {
		jest.clearAllMocks();
	});

	afterAll(() => {
		consoleSpy.mockRestore();
	});

	it('should return data on successful fetch', async () => {
		const mockData = { id: 1, name: 'Test' };
		const mockResponse = {
			success: true,
			data: mockData,
		};

		jest.spyOn(global, 'fetch').mockResolvedValue({
			ok: true,
			json: jest.fn<() => Promise<typeof mockResponse>>().mockResolvedValue(mockResponse),
		} as unknown as Response);

		const result = await fetchData<typeof mockData>(mockUrl);

		expect(result).toEqual({
			data: mockData,
			error: false,
		});
		expect(global.fetch).toHaveBeenCalledWith(
			expect.stringContaining(mockUrl),
			expect.any(Object),
		);
	});

	it('should return error true when response is not ok', async () => {
		jest.spyOn(global, 'fetch').mockResolvedValue({
			ok: false,
			status: 500,
		} as unknown as Response);

		const result = await fetchData(mockUrl);

		expect(result).toEqual({
			data: undefined,
			error: true,
		});
		expect(consoleSpy).toHaveBeenCalled();
	});

	it('should return error true when responseData.success is false', async () => {
		const mockResponse = {
			success: false,
			message: 'Server error message',
		};

		jest.spyOn(global, 'fetch').mockResolvedValue({
			ok: true,
			json: jest.fn<() => Promise<typeof mockResponse>>().mockResolvedValue(mockResponse),
		} as unknown as Response);

		const result = await fetchData(mockUrl);

		expect(result).toEqual({
			data: undefined,
			error: true,
		});
		expect(consoleSpy).toHaveBeenCalledWith(
			expect.any(String),
			expect.objectContaining({
				message: 'Server error message',
			}),
		);
	});

	it('should return error true when fetch throws an error', async () => {
		jest.spyOn(global, 'fetch').mockRejectedValue(new Error('Network error'));

		const result = await fetchData(mockUrl);

		expect(result).toEqual({
			data: undefined,
			error: true,
		});
		expect(consoleSpy).toHaveBeenCalled();
	});
});
