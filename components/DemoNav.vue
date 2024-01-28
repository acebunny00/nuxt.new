<template>
	<div class="right">
		<v-switch value="light" label="Dark mode" @click="toggleTheme" />
	</div>
	<nav>
		<ul>
			<li><NuxtLink to="/">index</NuxtLink></li>
			<li><NuxtLink to="/product">product</NuxtLink></li>
			<li><NuxtLink to="/product/1">product/1</NuxtLink></li>
			<li><NuxtLink to="/product/2">product/2</NuxtLink></li>
			<li><NuxtLink to="/product/3">product/3</NuxtLink></li>
			<li><NuxtLink to="/login">login</NuxtLink></li>
			<li><NuxtLink to="/protected">protected</NuxtLink></li>
		</ul>
	</nav>
	<p>Current route: {{ route.path }}</p>
	<hr />
</template>

<script setup>
	import { useTheme } from "vuetify";
	const route = useRoute();
	const theme = useTheme();
	function toggleTheme() {
		theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
	}
</script>

<style scoped>
	.right {
		float: right;
	}
	nav {
		box-shadow: rgb(100 100 111 / 20%) 0px 7px 29px 0px;
		background-color: #eee;
		display: flow-root;
	}
	ul {
		list-style: none;
	}
	li {
		float: left;
		margin-right: 20px;
	}
</style>
