<template>
	<h1>VueUse CoreDemo</h1>
	<div>x: {{ x }}, y: {{ y }}</div>
	<div>usePreferredDark: {{ isDark }}</div>
	<div>useLocalStorage: {{ store }}</div>
	<div ref="el">Click Outside of Me</div>
	<hr />
</template>

<script setup>
	// tracks mouse position
	const { x, y } = useMouse();

	// is user prefers dark theme
	const isDark = usePreferredDark();

	// persist state in localStorage
	const store = useLocalStorage("my-storage", {
		name: "Apple",
		color: "red",
	});

	const el = ref();
	function close() {
		alert("VueUseCoreDemo");
	}
	onClickOutside(el, close);
</script>

<style></style>
