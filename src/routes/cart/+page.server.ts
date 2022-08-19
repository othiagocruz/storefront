import type { PageServerLoad } from './$types';
import { cart as api } from '$lib/api/cart';
import { withSSRContext } from 'aws-amplify';

export const load: PageServerLoad = async ({ locals }) => {
	// locals.userid comes from src/hooks.js
	const { Auth } = withSSRContext();
	let _authenticated = false;
	const user = Auth.currentAuthenticatedUser()
		.then(async (user: { attributes: { sub: string } }) => {
			_authenticated = true;
			return user;
		})
		.catch(() => {
			_authenticated = false;
		});
	const cart = await api(_authenticated ? user.attributes.sub : locals.userid);
	return {
		cart: cart,
		user_id: _authenticated ? user.attributes.sub : locals.userid
	};
};
