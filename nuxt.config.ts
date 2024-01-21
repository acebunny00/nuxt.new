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
	modules: [
		//
		"@vueuse/nuxt",
	],
});
