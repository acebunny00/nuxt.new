<template>
	<h1>Prisma ORM Data from the database</h1>
	<p>
		User table <strong>{{ user_oneline?.length || "no connection" }}</strong> records!
	</p>
	<h3>user_multilineRaw</h3>
	<div v-for="(item, i) in user_multilineRaw">
		<img :src="item.image" class="img-container" />
		{{ item }}
	</div>
	<h3>user_multiline</h3>
	<div v-for="(item, i) in user_multiline">
		<img :src="item.image" class="img-container" />
		{{ item }}
	</div>
	<h3>user_oneline</h3>
	<div v-for="(item, i) in user_oneline">
		<img :src="item.image" class="img-container" />
		{{ item }}
	</div>
	<hr />
</template>

<script setup>
	const { data: user_multilineRaw } = useFetch("/api/multilineRaw");
	const { data: user_multiline } = useFetch("/api/multiline");
	const { data: user_oneline } = useFetch("/api/oneline");
</script>

<style scoped>
	.img-container {
		vertical-align: middle;
	}
</style>
