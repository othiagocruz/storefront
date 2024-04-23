<script type="ts">
	import Products from '$lib/Products.svelte';
	import type { PageData } from './$types';
	import { QueryClientProvider } from '@sveltestack/svelte-query';

	export let data: PageData;
	export let errors;

	if (errors) {
		console.log('errors: ', errors);
	}
</script>

<svelte:head>
	<title>Storefront | Home</title>
	<meta name="description" content="SvelteKit Hasura shopping cart" />
</svelte:head>

<h1>Storefront</h1>
<p class="p-4 leading-5">Concept for a shopping cart system using sveltekit and hasura.</p>
<p class="px-40 py-2 leading-5 xl:w-2/3 m-auto">
	You can add items to your cart and it displays the sum directly from the database using computed
	fields and the Sum function, interesting because the field is a money field so it handles on DB
	level things like rounding and float parsing.
</p>
<p class="p-4 leading-5">
	This idead was intended to avoid sum of values and float parsing on javascript for monetary
	precision.
</p>
<nav class="mt-10">
	<a class="font-bold" href="/cart">See Cart</a>
	<a class="font-bold" href="/changelog">Changelog</a>
</nav>

<QueryClientProvider>
	<Products initialData={data.products} />
</QueryClientProvider>
