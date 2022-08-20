<script lang="ts">
	import { useQuery } from '@sveltestack/svelte-query';
	import type { ProductsQuery } from '$lib/generated/graphql';
	import { products as api } from '$lib/api/products';
	import { enhance } from '$lib/form';
	import { goto } from '$app/navigation';

	export let initialData: ProductsQuery['products'];

	$: query = useQuery<ProductsQuery['products'], { message: string }>(
		'products',
		async () => {
			const { products } = await api();
			return products;
		},
		{ initialData }
	);

	$: loading_id = '';
</script>

<div class="mt-6">
	<h1 class="mb-6">Products</h1>
	<div>
		{#if $query.status === 'loading'}
			Loading...
		{:else if $query.status === 'error'}
			<span>Error: {$query.error.message}</span>
		{:else if $query.data}
			<div class="flex items-center justify-center gap-12">
				{#each $query.data as product}
					<form
						class="mb-6 flex justify-center items-center flex-col"
						action="/cart"
						method="post"
						use:enhance={{
							pending: () => {
								loading_id = product.id;
							},
							result: async () => {
								window.location.href = '/cart';

								loading_id = '';
							}
						}}
					>
						<input type="hidden" name="id" value={product.id} />

						<img loading="lazy" src={product.image} alt={product.name} width={120} height={80} />
						<p class="text-lg leading-tight mt-6">
							{product.name}
						</p>
						<strong class="text-3xl leading-tight block mb-2">{product.amount}</strong>

						<button
							disabled={loading_id === product.id}
							class="bg-black disabled:bg-zinc-800 text-sm text-white p-2"
						>
							{#if loading_id === product.id}
								<img
									loading="lazy"
									src="/three-dots.svg"
									class="mx-4 my-2"
									alt="Loading..."
									width={24}
									height={24}
								/>
							{:else}
								Add to cart
							{/if}
						</button>
					</form>
				{/each}
			</div>
		{/if}
	</div>
</div>
