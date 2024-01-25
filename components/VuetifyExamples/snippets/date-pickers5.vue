<template>
	<v-container>
		<v-row justify="space-around">
			<v-date-picker color="primary"></v-date-picker>
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
