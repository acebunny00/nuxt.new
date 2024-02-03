// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	app: {
		head: {
			charset: "utf-8",
			link: [
				//
				{ rel: "preconnect", href: "https://fonts.googleapis.com" },
				{ rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", crossorigin: "" },
				{ rel: "stylesheet", href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" },
			],
		},
	},
	css: ["./assets/common.css"],
	devtools: { enabled: true, timeline: { enabled: true } },
	runtimeConfig: {
		public: {
			title: process.env.SEO_title,
			description: process.env.SEO_description,
			ogTitle: process.env.SEO_ogTitle,
			ogDescription: process.env.SEO_ogDescription,
			ogImage: process.env.SEO_ogImage,
			ogUrl: process.env.SEO_ogUrl,
			twitterTitle: process.env.SEO_twitterTitle,
			twitterDescription: process.env.SEO_twitterDescription,
			twitterImage: process.env.SEO_twitterImage,
			twitterCard: process.env.SEO_twitterCard,
			htmlAttrs_lang: process.env.SEO_htmlAttrs_lang,
			link_rel: process.env.SEO_link_rel,
			link_type: process.env.SEO_link_type,
			link_href: process.env.SEO_link_href,
		},
	},
	typescript: { shim: false, strict: false },
	telemetry: false,
});
