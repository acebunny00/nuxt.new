<template>
	<v-select :items="items" disabled label="Disabled"></v-select>
</template>
<script>
	export default {
		data: () => ({
			items: ["Foo", "Bar", "Fizz", "Buzz"],
		}),
	};
</script>
