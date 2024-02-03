<template>
	<PrismaExample />
</template>
<script setup>
	const config = useRuntimeConfig();
	useHead({
		htmlAttrs: { lang: config.public.htmlAttrs_lang },
		link: [{ rel: config.public.link_rel, type: config.public.link_type, href: config.public.link_href }],
	});
	useSeoMeta({
		title: config.public.title,
		description: config.public.description,
		ogTitle: config.public.ogTitle,
		ogDescription: config.public.ogDescription,
		ogImage: config.public.ogImage,
		ogUrl: config.public.ogUrl,
		twitterTitle: config.public.twitterTitle,
		twitterDescription: config.public.twitterDescription,
		twitterImage: config.public.twitterImage,
		twitterCard: config.public.twitterCard,
	});
</script>
