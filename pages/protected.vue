<template>protected</template>

<script setup>
	definePageMeta({
		// auth 미들웨어 적용으로 보호
		// https://sidebase.io/nuxt-auth/application-side/protecting-pages#navigateauthenticatedto
		middleware: "auth",
	});
</script>

<style></style>
