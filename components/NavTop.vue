<template>
	Current route: {{ route.path }}
	<hr />
</template>

<script setup>
	const route = useRoute();
</script>
