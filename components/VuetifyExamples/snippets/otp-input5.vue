<template>
	<div class="text-center">
		<v-otp-input
			v-model="otp"
			:loading="loading"
			length="5"
			variant="underlined"
		></v-otp-input>

		<v-btn
			:disabled="otp.length < 5 || loading"
			class="my-5"
			color="surface-variant"
			text="Submit"
			variant="tonal"
			@click="onClick"
		></v-btn>
	</div>
</template>
<script>
	import { VOtpInput } from "vuetify/labs/VOtpInput";
	export default {
		components: {
			VOtpInput,
		},
		data: () => ({
			loading: false,
			otp: "",
		}),

		methods: {
			onClick() {
				this.loading = true;

				setTimeout(() => {
					this.loading = false;
				}, 2000);
			},
		},
	};
</script>
