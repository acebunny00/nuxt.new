<template>
	<div class="layout">
		<div class="group">
			<h1 class="heading">Prisma ORM</h1>
			<p class="description">Prisma unlocks a new level of developer experience when working with databases thanks to its intuitive data model, automated migrations, type-safety & auto-completion.</p>
		</div>
		<div class="group">
			<p>Prisma ORM Data from the database, received {{ examples?.length || 0 }} records!</p>
			<div v-for="(item, i) in examples">{{ item }}</div>
			<div class="actions">
				<a href="https://sidebase.io/sidebase/components/prisma" :blank="true"> Documentation </a>
			</div>
		</div>
	</div>
	<hr />
</template>

<script setup>
	const { data: examples } = useFetch("/api/examples");
</script>
