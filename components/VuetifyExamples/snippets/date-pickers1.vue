<template>
	<div class="d-flex justify-center">
		<v-locale-provider locale="sv">
			<v-date-picker></v-date-picker>
		</v-locale-provider>
	</div>
</template>
<script>
	import { VDatePicker } from "vuetify/labs/VDatePicker";
	export default {
		components: {
			VDatePicker,
		},
	};
</script>
