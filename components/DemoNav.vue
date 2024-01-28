<template>
	<div class="right">
		<div v-if="status === 'authenticated'">Logged in as "{{ data?.user?.name }}"</div>
		<div v-else>Not logged in</div>
		<div class="right">
			<button v-if="status !== 'authenticated'" @click="signIn">Sign in</button>
			<button v-else @click="signOut">Sign out</button>
		</div>
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
	const { status, data, signIn, signOut } = useAuth();
	const route = useRoute();
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
