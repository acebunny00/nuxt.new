<template>
	<DemoAuth />
</template>

<script setup>
	definePageMeta({
		auth: {
			// https://sidebase.io/nuxt-auth/application-side/guest-mode
			// 미인증시 페이지 노출
			// 인증시 리다이렉트
			unauthenticatedOnly: true,
			// 적용 안됨. 왜???
			navigateAuthenticatedTo: "/",
		},
	});
</script>

<style></style>
