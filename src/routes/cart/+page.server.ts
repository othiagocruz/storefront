import type { PageServerLoad } from './$types';
import { cart as api } from '$lib/api/cart';

export const load: PageServerLoad = async ({ locals }) => {
	// locals.userid comes from src/hooks.js

	const cart = await api(locals.userid);
	return {
		cart: cart,
		user_id: locals.userid
	};
};
