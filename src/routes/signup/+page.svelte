<script type="ts">
	import { goto } from '$app/navigation';
	import { getErrorMessage } from '$lib/error';

	import { Auth } from 'aws-amplify';
	import { _username } from '$lib/stores';

	let username = '';
	let password = '';
	let email = '';
	let posting = false;
	let _error = '';

	async function handleSubmit() {
		posting = true;
		try {
			await Auth.signUp({
				username,
				password,
				attributes: {
					email // optional
					// other custom attributes
				},
				autoSignIn: {
					// optional - enables auto sign in after user is confirmed
					enabled: true
				}
			});
			_username.set(username);
			posting = false;
			goto('/auth/confirm');
		} catch (error) {
			posting = false;
			_error = getErrorMessage(error);
		}
	}
</script>

<h1>Storefront</h1>

<p class="max-w-[220px] leading-snug">
	Sign up for free! You will receive an e-mail with a confirmation code.
</p>
<form class="flex flex-col gap-4 w-min mx-auto mt-6" on:submit|preventDefault={handleSubmit}>
	<input
		type="text"
		bind:value={username}
		id="username"
		placeholder="username"
		disabled={posting}
	/>
	<input type="email" bind:value={email} id="email" placeholder="email" disabled={posting} />
	<input
		type="password"
		bind:value={password}
		id="password"
		disabled={posting}
		placeholder="password"
	/>
	{#if _error}
		<p class="text-red-600">{_error}</p>
	{/if}
	<button class="bg-black text-white p-4" disabled={posting}>Submit</button>
</form>

<nav class="mt-6">
	<a href="/">Back to home</a>
</nav>
