import { useCallback, useEffect, useRef, useState } from 'react';

interface UseFetchOptions extends RequestInit {
	enabled?: boolean;
}

interface UseFetchResult<T> {
	data: T | null;
	loading: boolean;
	error: string | null;
	refetch: () => Promise<void>;
}

export function useFetch<T>(url: string, options: UseFetchOptions = {}) {
	const [data, setData] = useState<T | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const abortControllerRef = useRef<AbortController | null>(null);
	const optionsRef = useRef(options);

	useEffect(() => {
		optionsRef.current = options;
	}, [options]);

	const fetchData = useCallback(async (): Promise<void> => {
		abortControllerRef.current?.abort();
		abortControllerRef.current = new AbortController();

		setLoading(true);
		setError(null);
		setData(null);

		try {
			const res = await fetch(url, {
				signal: abortControllerRef.current.signal,
				...optionsRef.current,
			});

			if (!res.ok) {
				const errorText = await res.text();
				throw new Error(`${res.status} ${res.statusText}: ${errorText}`);
			}

			const result: T = await res.json();
			setData(result);
		} catch (err: unknown) {
			if (err instanceof DOMException) {
				if (err.name !== 'AbortError') {
					setError(err.message);
				}
			} else {
				setError(err instanceof Error ? err.message : 'Unknown error');
			}
		} finally {
			setLoading(false);
		}
	}, [url]);

	useEffect(() => {
		if (optionsRef.current.enabled !== false) {
			fetchData();
		}

		return () => abortControllerRef.current?.abort();
	}, [fetchData]);

	return { data, loading, error, refetch: fetchData } as UseFetchResult<T>;
}
