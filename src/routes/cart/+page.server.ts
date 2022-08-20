import type { PageServerLoad, Action } from './$types';
import { cart as api, post } from '$lib/api/cart';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	// locals.userid comes from src/hooks.js

	const cart = await api(locals.userid);
	return {
		cart: cart,
		user_id: locals.userid
	};
};

export const POST: Action = async ({ request, locals }) => {
	const form = await request.formData();
	const id = form.get('id')?.toString();

	if (!id) throw error(401, 'Product ID is required');
	await post(locals.userid, id);
};
