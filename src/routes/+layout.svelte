<script type="ts" context="module">
	import '../app.scss';
	import { Amplify, Hub } from 'aws-amplify';
	import { awsExports } from '$lib/env';
	import { _username } from '$lib/stores';
	import { goto } from '$app/navigation';

	Amplify.configure({ ...awsExports, ssr: true });

	Hub.listen('auth', ({ payload }) => {
		const { event } = payload;
		if (event === 'signIn') {
			_username.set(payload.data.username);
		} else if (event === 'signOut') {
			_username.set('');

			goto('/login');
		}
	});
</script>

<svelte:head>
	<link rel="preload" as="style" href="https://use.typekit.net/sjb7trk.css" />
	<link rel="stylesheet" href="https://use.typekit.net/sjb7trk.css" />
</svelte:head>

<main>
	<slot />
</main>
