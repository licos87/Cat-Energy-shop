import { Result } from '@shared/types';

const BASE_URL = process.env.API_URL || 'http://localhost:3001';

export async function fetchData<T>(url: string) {
	const result = {
		data: <T>undefined,
		error: false,
	};

	try {
		const response = await fetch(BASE_URL + url, { cache: 'no-store' });

		if (!response.ok) {
			throw new Error(`HTTP ${response.status}`);
		}

		const responseData: Result<T> = await response.json();

		if (!responseData.success) {
			throw new Error(responseData.message || 'Ошибка сервера');
		}

		result.data = responseData.data;
	} catch (error) {
		console.error('fetchData error:', error);
		result.error = true;
	}

	return result;
}
