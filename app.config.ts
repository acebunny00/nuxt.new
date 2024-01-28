export default defineAppConfig({
	myLayer: {
		name: "Hello from Nuxt layer",
	},
	ui: {
		primary: "lime",
		gray: "neutral",
	},
});

declare module "@nuxt/schema" {
	interface AppConfigInput {
		myLayer?: {
			/** Project name */
			name?: string;
		};
	}
}
