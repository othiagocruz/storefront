<script type="ts" context="module">
	import '../app.scss';
	import { _username } from '$lib/stores';
</script>

<svelte:head>
	<link rel="preload" as="style" href="https://use.typekit.net/sjb7trk.css" />
	<link rel="stylesheet" href="https://use.typekit.net/sjb7trk.css" />
</svelte:head>

<main>
	<slot />
</main>

<footer class="mt-16 leading-5">
	Github:
	<a class="font-bold" href="https://github.com/othiagocruz/storefront" target="_blank"
		>github.com/othiagocruz/storefront</a
	>
</footer>
