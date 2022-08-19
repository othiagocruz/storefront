import type { PageServerLoad } from './$types';
import { request } from 'graphql-request';
import ProductsQql from '$lib/graphql/products.graphql?raw';
import type { ProductsQuery } from '$lib/generated/graphql';
import { HASURA_GRAPHQL_ENDPOINT } from '$lib/env';

export const load: PageServerLoad = async () => {
	const { products } = await request(HASURA_GRAPHQL_ENDPOINT, ProductsQql);

	return {
		products: products as ProductsQuery['products']
	};
};
