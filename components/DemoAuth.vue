<template>
	<div class="actions">
		<p>Sign-In Form</p>
		<button v-if="status !== 'authenticated'" @click="signIn">Sign in</button>
		<button v-else @click="signOut">Sign out</button>
	</div>
	<div class="actions">
		<p>Sign-In OAuth</p>
		<button @click="signIn('github')">Github</button>
		<!-- NOTE: Here we hard-coded username and password, on your own page this should probably be connected to two inputs for username + password -->
		<button @click="signIn('credentials', { username: 'jsmith', password: 'hunter2' })">Credentials</button>
	</div>
	<hr />
</template>

<script setup>
	const { status, data, signIn, signOut } = useAuth();
</script>

<style></style>
