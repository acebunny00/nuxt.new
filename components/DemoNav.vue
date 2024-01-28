<template>
	<v-navigation-drawer rail permanent location="right" style="position: fixed">
		<v-switch true-icon="mdi-white-balance-sunny" false-icon="mdi-weather-night" @click="toggleTheme" />
		<v-divider />
		<v-list>
			<v-list-item prepend-icon="mdi-store" to="/"></v-list-item>
			<v-list-item prepend-icon="mdi-list-box-outline" to="/product"></v-list-item>
			<v-list-item prepend-icon="mdi-list-status" to="/product/1"></v-list-item>
			<v-list-item prepend-icon="mdi-list-status" to="/product/2"></v-list-item>
			<v-list-item prepend-icon="mdi-list-status" to="/product/3"></v-list-item>
			<v-list-item prepend-icon="mdi-login" to="/login"></v-list-item>
			<v-list-item prepend-icon="mdi-security" to="/protected"></v-list-item>
		</v-list>
	</v-navigation-drawer>
	<p>Current route: {{ route.path }}</p>
</template>

<script setup>
	import { useTheme } from "vuetify";
	const route = useRoute();
	const theme = useTheme();
	function toggleTheme() {
		theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
	}
</script>

<style>
	::-webkit-scrollbar {
		width: 0; /* Remove scrollbar space */
		background: transparent; /* Optional: just make scrollbar invisible */
	}
	/* Optional: show position indicator in red */
	::-webkit-scrollbar-thumb {
		background: #ff0000;
	}
</style>
