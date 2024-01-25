<template>
	<h2><a href="https://vuetifyjs.com/en/components/lazy">lazy</a></h2>
	<div>
		<v-lazy
			:min-height="200"
			:options="{ threshold: 0.5 }"
			transition="fade-transition"
		>
			<div class="text-center text-body-2 mb-12">
				The card will appear below:
			</div>

			<v-card
				class="mx-auto"
				max-width="336"
				text="Phasellus magna. Quisque rutrum. Nunc egestas, augue at pellentesque laoreet."
				title="Card title"
			>
				<v-card-actions class="justify-center">
					<v-btn @click="reset">Reset Demo</v-btn>
				</v-card-actions>
			</v-card>
		</v-lazy>
	</div>
</template>

<script lang="ts" setup></script>

<style></style>
