<script type="ts">
	import Cart from '$lib/Cart.svelte';

	import { QueryClientProvider } from '@sveltestack/svelte-query';
</script>

<h1>Storefront</h1>
<QueryClientProvider>
	<Cart />
</QueryClientProvider>
<nav class="mt-6">
	<a href="/">Back to home</a>
</nav>
