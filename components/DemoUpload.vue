<template>
	<h1>Upload File(Solo)</h1>
	<input type="file" @change="onChangeFile" /><br />
	<p>Number input: <input v-model="numberField" type="number" placeholder="Enter number" /></p>
	<p>Other input: <input v-model="other" type="text" placeholder="Enter text" /></p>
	<button @click="onSubmit">Submit</button>
</template>

<script setup lang="ts">
	const file = ref<File | null>(null);
	const numberField = ref(0);
	const other = ref("");

	const onChangeFile = (e: Event) => {
		const [_file] = (e.target as HTMLInputElement).files as FileList;
		file.value = _file;
	};

	const onSubmit = async () => {
		try {
			if (!file.value) return; // throw new Error("No file selected");
			const body = new FormData();
			body.append("file", file.value, file.value.name);
			body.append("numberField", String(numberField.value));
			body.append("other", other.value);
			await $fetch("api/upload", {
				method: "post",
				body,
			});
		} catch (err) {
			console.error(err);
			alert("Error uploading the file");
		} finally {
		}
	};
</script>

<style></style>
