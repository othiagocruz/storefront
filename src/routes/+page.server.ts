import type { PageServerLoad } from './$types';
import { products as api } from '$lib/api/products';
import type { ProductsQuery } from '$lib/generated/graphql';

export const load: PageServerLoad = async (params) => {
	const { products } = await api();
	params.setHeaders({
		'Cache-Control': 'no-cache, no-store, must-revalidate'
	});
	return {
		products: products as ProductsQuery['products']
	};
};
