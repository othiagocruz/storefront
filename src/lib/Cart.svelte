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
	<div class="grid grid-cols-3 gap-6 grid-flow-col">
		{#if $query.status === 'loading'}
			Loading...
		{:else if $query.status === 'error'}
			<span>Error: {$query.error.message}</span>
		{:else if $query.data}
			{#each $query.data.cart_items as cart_item}
				<div class="mb-6 flex justify-center items-center flex-col">
					<img loading="lazy" src={cart_item.image} alt={cart_item.name} width={120} height={80} />
					<p class="text-lg leading-tight mt-6 mb-4">
						{cart_item.name}
					</p>
					<strong class="text-xl leading-tight block"
						>{cart_item.carts_aggregate.aggregate?.count}x {cart_item.amount}</strong
					>
					<strong class="text-2xl leading-tight block mb-2">{cart_item.user_cart_sum}</strong>
				</div>
			{/each}
		{/if}
	</div>
	{#if $query.data}
		{#if $query.data.cart_total[0]}
			<strong class="mt-6 block text-3xl">Total: {$query.data.cart_total[0].result}</strong>
		{:else}
			<p>No items on you cart, go do some shopping!</p>
		{/if}
	{/if}
</div>
