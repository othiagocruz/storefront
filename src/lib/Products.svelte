<script lang="ts">
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import type { ProductsQuery } from '$lib/generated/graphql';
	import { products as api } from '$lib/api/products';

	export let initialData: ProductsQuery['products'];

	$: query = useQuery<ProductsQuery['products'], { message: string }>(
		'products',
		async () => {
			const { products } = await api();
			return products;
		},
		{ initialData }
	);

	const client = useQueryClient();
</script>

<div class="mt-6">
	<h1 class="mb-6">Products</h1>
	<div>
		{#if $query.status === 'loading'}
			Loading...
		{:else if $query.status === 'error'}
			<span>Error: {$query.error.message}</span>
		{:else if $query.data}
			<div>
				{#each $query.data as product}
					<p class="leading-loose">
						<span
							style={// We can use the queryCache here to show bold links for
							// ones that are cached
							client.getQueryData(['product', product.id])
								? 'color: green; font-weight: bold; cursor: pointer;'
								: 'cursor: pointer;'}
						>
							{product.name}
						</span>
					</p>
				{/each}
			</div>
		{/if}
	</div>
</div>
