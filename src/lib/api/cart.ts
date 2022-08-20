import { HASURA_GRAPHQL_ENDPOINT } from '$lib/env';
import { request } from 'graphql-request';
import Cart from '$lib/graphql/cart.graphql?raw';
import CartPost from '$lib/graphql/cart_post.graphql?raw';

export async function cart(user_id: string) {
	return await request(HASURA_GRAPHQL_ENDPOINT, Cart, undefined, {
		'x-hasura-user-id': user_id
	});
}

export async function post(user_id: string, product_id: string) {
	return await request(
		HASURA_GRAPHQL_ENDPOINT,
		CartPost,
		{
			product_id
		},
		{
			'x-hasura-user-id': user_id
		}
	);
}
