<template>
	<div>
		<h1>Nuxt Routing set up successfully!</h1>
		<p>Current route: {{ route.path }}</p>
		<a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
		<hr />
	</div>
	<slot />
</template>

<script setup>
	const route = useRoute();
</script>

<style></style>
