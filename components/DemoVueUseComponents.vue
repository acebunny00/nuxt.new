<template>
	<h1>VueUse ComponentsDemo</h1>
	<div>
		<UseMouse v-slot="{ x, y }">x: {{ x }} y: {{ y }} </UseMouse>
	</div>
	<div>
		<UseDark v-slot="{ isDark, toggleDark }">
			<button @click="toggleDark()">UseDark: {{ isDark }}</button>
		</UseDark>
	</div>
	<div>
		<OnClickOutside @trigger="close">
			<div>Click Outside of Me</div>
		</OnClickOutside>
	</div>
	<hr />
</template>

<script setup>
	import { OnClickOutside, UseMouse, UseDark } from "@vueuse/components";
	function close() {
		alert("VueUseComponentsDemo");
	}
</script>

<style></style>
