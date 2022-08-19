<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import type { CartQuery } from '$lib/generated/graphql';
	import { cart as api } from '$lib/api/cart';

	export let initialData: CartQuery;
	export let user_id: string;

	$: query = useQuery<CartQuery, { message: string }>('cart', async () => await api(user_id), {
		initialData
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
			{#each $query.data.cart_items as cart_item}
				<p class="leading-loose">
					{cart_item.carts_aggregate.aggregate?.count}x {cart_item.amount} = {cart_item.user_cart_sum}
					<span>{cart_item.name}</span> <button>+</button><button>-</button>
				</p>
			{/each}
			{#if $query.data.cart_total[0]}
				<strong class="mt-6 block">Total: {$query.data.cart_total[0].result}</strong>
			{:else}
				<p>No items on you cart, go do some shopping!</p>
			{/if}
		{/if}
	</div>
</div>
