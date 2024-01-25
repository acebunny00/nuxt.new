<template>
	<v-skeleton-loader
		boilerplate
		class="mx-auto"
		elevation="2"
		max-width="360"
		type="card-avatar, article, actions"
	></v-skeleton-loader>
</template>
<script>
	import { VSkeletonLoader } from "vuetify/labs/VSkeletonLoader";
	export default {
		components: {
			VSkeletonLoader,
		},
	};
</script>
