<script lang="ts">
	import { request } from 'graphql-request';
	import { useQuery, useQueryClient } from '@sveltestack/svelte-query';
	import ProductsQql from '$lib/graphql/products.graphql?raw';
	import type { ProductsQuery } from '$lib/generated/graphql';
	import { HASURA_GRAPHQL_ENDPOINT } from '$lib/env';

	$: query = useQuery<ProductsQuery['products'], { message: string }>('products', async () => {
		const { products } = await request(HASURA_GRAPHQL_ENDPOINT, ProductsQql);

		return products;
	});

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
			<div>{$query.isFetching ? 'Background Updating...' : ' '}</div>
		{/if}
	</div>
</div>
