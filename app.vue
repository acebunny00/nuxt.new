<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
	const { status, data, signIn, signOut } = useAuth();
</script>

<style></style>
