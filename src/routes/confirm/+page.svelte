<script type="ts">
	import { Hub } from 'aws-amplify';
	import { goto } from '$app/navigation';
	import { getErrorMessage } from '$lib/error';
	import { _username } from '$lib/stores';
	import { Auth } from 'aws-amplify';
	import { fade, fly } from 'svelte/transition';
	let code = '';
	let username: string = $_username;
	let posting = false;
	let _error = '';
	let _message = '';
	async function confirmSignUp() {
		posting = true;
		try {
			await Auth.confirmSignUp(username, code);
		} catch (error) {
			posting = false;
			_error = getErrorMessage(error);
		}
	}
	async function resendConfirmationCode() {
		posting = true;
		try {
			await Auth.resendSignUp(username);
			_message = 'Code resent successfully';
			posting = false;
			setTimeout(() => {
				_message = '';
			}, 3000);
		} catch (err) {
			_error = getErrorMessage(err);
			posting = false;
		}
	}
	Hub.listen('auth', ({ payload }) => {
		const { event } = payload;
		if (event === 'autoSignIn') {
			posting = false;
			goto('/');
			// assign user
		} else if (event === 'autoSignIn_failure') {
			_error = 'Auto sign in failed';
		}
	});
</script>

<h1>Storefront</h1>
<form class="flex flex-col gap-4 max-w-screen-sm mx-auto" on:submit|preventDefault={confirmSignUp}>
	<h2>Enter the received code:</h2>
	<input type="text" bind:value={code} id="code" placeholder="code" disabled={posting} />
	<button class="text-xs text-right w-full" type="button" on:click={resendConfirmationCode}
		>Resend confirmation code</button
	>
	{#if _message}
		<p in:fly={{ x: 100 }} out:fade>{_message}</p>
	{/if}
	{#if _error}
		<p class="text-red-600">{_error}</p>
	{/if}
	<button class="bg-black text-white p-4" disabled={posting}>Submit</button>
</form>
