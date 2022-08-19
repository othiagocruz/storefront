import type { PageServerLoad } from './$types';
import { products as api } from '$lib/api/products';
import type { ProductsQuery } from '$lib/generated/graphql';

export const load: PageServerLoad = async () => {
	const { products } = await api();

	return {
		products: products as ProductsQuery['products']
	};
};
