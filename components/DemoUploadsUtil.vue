<template>
	<h1>Upload File(Multi) with Utils</h1>
	<div v-for="(file, i) in form.files" :key="i">
		<input type="file" @change="(event) => onChangeFile(event, i)" />
		<button @click="() => form.files.splice(i, 1)">Remove File</button>
		<button @click="() => form.files.push({ file: null })">Add File</button>
	</div>
	<br />
	<p>Number input: <input v-model="form.numberField" type="number" placeholder="Enter number" /></p>
	<p>Other input: <input v-model="form.other" type="text" placeholder="Enter text" /></p>
	<button @click="onSubmit">Submit</button>
</template>

<script setup lang="ts">
	import { serialize } from "object-to-formdata";
	const form = reactive({
		files: [{ file: null }] as { file: File | null }[],
		numberField: 0,
		other: "",
	});
	const onChangeFile = (e: Event, index: number) => {
		const [_file] = (e.target as HTMLInputElement).files as FileList;
		form.files[index].file = _file;
	};

	const onSubmit = async () => {
		try {
			await $fetch("api/uploadsUtil", {
				method: "post",
				body: serialize(form, { indices: true, dotsForObjectNotation: true }),
			});
		} catch (err) {
			console.error(err);
			alert("Error uploading the file");
		} finally {
		}
	};
</script>

<style></style>
