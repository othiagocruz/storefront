<script type="ts">
	import Cart from '$lib/Cart.svelte';
	import type { PageData } from './$types';

	import { QueryClientProvider } from '@sveltestack/svelte-query';

	export let data: PageData;
</script>

<svelte:head>
	<title>Storefront | Cart</title>
	<meta name="description" content="Your shopping cart" />
</svelte:head>

<h1>Storefront</h1>
<QueryClientProvider>
	<Cart initialData={data.cart} user_id={data.user_id} />
</QueryClientProvider>
<nav class="mt-6">
	<a href="/">Back to home</a>
</nav>
