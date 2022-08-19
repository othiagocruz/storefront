import { HASURA_GRAPHQL_ENDPOINT } from '$lib/env';
import { request } from 'graphql-request';
import Products from '$lib/graphql/products.graphql?raw';

export async function products() {
	return await request(HASURA_GRAPHQL_ENDPOINT, Products);
}
