import { error } from '@sveltejs/kit';

import { post } from '$lib/api/cart';

/** @type {import('./$types').RequestHandler} */
export async function POST({ request, locals }: { request: Request; locals: { userid: string } }) {
	const form = await request.formData();
	const id = form.get('id')?.toString();

	if (!id) throw error(401, 'Product ID is required');
	await post(locals.userid, id);

	return new Response(null);
}
