<template>
	<Sign />
</template>

<script setup>
	definePageMeta({ auth: { unauthenticatedOnly: true, navigateAuthenticatedTo: "/products" } });
</script>
