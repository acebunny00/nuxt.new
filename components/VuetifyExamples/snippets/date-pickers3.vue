<template>
	<v-container>
		<v-row justify="center">
			<v-date-picker width="400"></v-date-picker>
		</v-row>
	</v-container>
</template>
<script>
	import { VDatePicker } from "vuetify/labs/VDatePicker";
	export default {
		components: {
			VDatePicker,
		},
	};
</script>
