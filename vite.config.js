import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	define: {
		'process.env': process.env // env variables for vercel
	},
	resolve: {
		alias: {
			'./runtimeConfig': './runtimeConfig.browser' // fixes amplify build error
		}
	}
};

export default config;
