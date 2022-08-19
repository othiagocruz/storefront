import { HASURA_GRAPHQL_ENDPOINT } from '$lib/env';
import { request } from 'graphql-request';
import Cart from '$lib/graphql/cart.graphql?raw';

export async function cart(user_id: string) {
	return await request(HASURA_GRAPHQL_ENDPOINT, Cart, undefined, {
		'x-hasura-user-id': user_id
	});
}
