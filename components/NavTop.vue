<template>
	<div>Current route: {{ route.path }}</div>
	<div v-show="route?.params?.id">params.id: {{ route.params.id }}</div>
	<hr />
	<nav>
		<ul>
			<li><NuxtLink to="/">index</NuxtLink></li>
			<li><NuxtLink to="/products">products</NuxtLink></li>
			<li><NuxtLink to="/product/1">product/1</NuxtLink></li>
			<li><NuxtLink to="/product/2">product/2</NuxtLink></li>
			<li><NuxtLink to="/login">login</NuxtLink></li>
			<li><NuxtLink to="/my">my</NuxtLink></li>
			<li><NuxtLink to="/cart">cart</NuxtLink></li>
			<li><NuxtLink to="/Admin">useAuthInfo</NuxtLink></li>
		</ul>
	</nav>
	<br />
	<hr />
</template>

<script setup>
	const { status, data, signIn, signOut } = useAuth();
	const route = useRoute();
</script>
<style scoped>
	ul {
		list-style: none;
	}
	li {
		float: left;
		margin-right: 20px;
	}
</style>
