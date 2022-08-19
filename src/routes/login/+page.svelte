<script type="ts">
	import { goto } from '$app/navigation';
	import { getErrorMessage } from '$lib/error';

	import { Auth } from 'aws-amplify';

	let username = '';
	let password = '';
	let posting = false;
	let _error = '';

	async function signIn() {
		posting = true;
		try {
			await Auth.signIn(username, password);
			posting = false;
			goto('/');
		} catch (error) {
			posting = false;
			_error = getErrorMessage(error);
		}
	}
</script>

<h1>Storefront</h1>
<form class="flex flex-col gap-4 max-w-screen-sm mx-auto" on:submit|preventDefault={signIn}>
	<h2>Login to your account</h2>
	<input
		type="text"
		bind:value={username}
		id="username"
		placeholder="username"
		disabled={posting}
	/>
	<input
		type="password"
		bind:value={password}
		id="password"
		placeholder="password"
		disabled={posting}
	/>
	{#if _error}
		<p class="text-red-600">{_error}</p>
	{/if}
	<button class="bg-black text-white p-4" disabled={posting}>Submit</button>
</form>

<nav class="mt-6">
	<a href="/">Back to home</a>
</nav>
