export type Result<T, E = string> =
	| { success: true; data: T }
	| { success: false; message: E };

export interface Category {
	id: number;
	name: string;
}
