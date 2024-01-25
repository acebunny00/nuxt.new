<template>
	<v-select
		v-model="model"
		:items="items"
		readonly
		label="Read-only"
	></v-select>
</template>
<script>
	export default {
		data: () => ({
			items: ["Foo", "Bar", "Fizz", "Buzz"],
			model: "Foo",
		}),
	};
</script>
