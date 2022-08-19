<script lang="ts">
	import { request } from 'graphql-request';
	import { useQuery } from '@sveltestack/svelte-query';
	import UserCart from '$lib/graphql/user_cart.graphql?raw';
	import type { UserCartQuery } from '$lib/generated/graphql';

	const endpoint = 'https://storefront.hasura.app/v1/graphql';

	$: query = useQuery<UserCartQuery['users'], { message: string }>('cart', async () => {
		const { users } = await request(endpoint, UserCart, undefined, {
			'x-hasura-user-id': 'e457c102-0bca-4d74-976e-8985199133b6'
		});
		return users;
	});
</script>

<div class="mt-6">
	<h2 class="mb-6">Your cart</h2>
	<div>
		{#if $query.status === 'loading'}
			Loading...
		{:else if $query.status === 'error'}
			<span>Error: {$query.error.message}</span>
		{:else if $query.data}
			<div>
				{JSON.stringify($query.data)}
			</div>
			<div>{$query.isFetching ? 'Background Updating...' : ' '}</div>
		{/if}
	</div>
</div>
