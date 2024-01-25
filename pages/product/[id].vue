<template>
	<div>route.params.id: {{ route.params.id }}</div>
</template>

<script setup>
	definePageMeta({
		validate: async (route) => {
			// Check if the id is made up of digits
			return /^\d+$/.test(route.params.id);
		},
	});

	const route = useRoute();
</script>

<style scoped></style>
