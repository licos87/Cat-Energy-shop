export type Result<T> =
	| { success: true; data: T }
	| { success: false; message: string };

export interface Program {
	id: number,
	name: string,
	description: string | null,
	icon: string | null,
	category_id: number,
};

export interface Category {
	id: number;
	name: string;
}
