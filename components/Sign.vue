<template>
	<div class="arrange-right">
		<strong>Profile</strong>
		<div v-if="status !== 'authenticated'">no sign</div>
		<div v-else>
			{{ data?.user?.name }}<br />
			<img :src="data?.user?.image" width="100px" />
		</div>

		<strong>Sign - Manual</strong>
		<div v-if="status === 'authenticated'"><button @click="signOut">Sign out</button></div>
		<div v-else><button @click="signIn">Sign in Page</button></div>

		<strong>Sign - OAuth</strong>
		<div v-show="status !== 'authenticated'">
			<li><button @click="signIn('credentials', { username: 'jsmith', password: 'hunter2' })">Credentials</button></li>
			<li><button @click="signIn('github')">Github</button></li>
			<li><button @click="signIn('google')">Google</button></li>
			<li><button @click="signIn('twitch')">Twitch</button></li>
		</div>
	</div>
</template>

<script setup>
	const { status, data, signIn, signOut } = useAuth();
</script>

<style scoped>
	.arrange-right {
		float: right;
	}
</style>
