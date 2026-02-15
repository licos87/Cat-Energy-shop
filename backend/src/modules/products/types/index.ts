export interface Product {
	id: number,
	name: string,
	weight: number,
	flavor: string,
	price: number,
	description?: string,
	image?: string,
	category_id: number,
}
