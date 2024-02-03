<template></template>

<script setup>
	definePageMeta({
		auth: { unauthenticatedOnly: true },
		validate: async (route) => {
			// Check if the id is made up of digits
			return /^\d+$/.test(route.params.id);
		},
	});
</script>
