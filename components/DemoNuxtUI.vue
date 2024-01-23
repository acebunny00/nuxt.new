<template>
	<UContainer>
		<UCard class="mt-10">
			<template #header>
				<div class="flex justify-between">
					<h1>Nuxt UI</h1>
					<ColorScheme><USelect v-model="$colorMode.preference" :options="['system', 'light', 'dark', 'sepia']" /></ColorScheme>
				</div>
				<h2>with <a href="_tailwind/" target="_blank">Tailwindcss</a></h2>
				<h2>with ColorMode</h2>
			</template>
		</UCard>
	</UContainer>
	<hr />
</template>

<script setup>
	const colorMode = useColorMode();
	console.log(colorMode.preference);
</script>

<style></style>
