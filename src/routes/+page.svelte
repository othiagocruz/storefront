<script type="ts">
	import { withSSRContext } from 'aws-amplify';
	import Products from '$lib/Products.svelte';
	import type { PageData } from './$types';
	import { QueryClientProvider } from '@sveltestack/svelte-query';
	const { Auth } = withSSRContext();

	async function signOut() {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	export let data: PageData;
</script>

<h1>Storefront</h1>
<nav>
	{#await Auth.currentAuthenticatedUser()}
		<p>loading...</p>
	{:then user}
		<p>
			Hello {user.username},
			<button class="hover:text-orange-500" on:click|preventDefault={signOut}>logout</button>.
		</p>
	{:catch error}
		<a href="/signup">Sign up</a>
		<a href="/login">Login</a>
	{/await}

	<a href="/cart">Cart</a>
</nav>

<QueryClientProvider>
	<Products initialData={data.products} />
</QueryClientProvider>
