// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	typescript: { shim: false, strict: false },
	telemetry: false,
	devtools: {
		enabled: true,
		timeline: {
			enabled: true,
		},
	},
	app: {
		head: {
			link: [
				{
					href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
					rel: "stylesheet",
				},
			],
			script: [
				{
					//
					innerHTML: "console.log('Hello world')",
				},
			],
		},
	},
});
