import { type MultiPartData } from "h3";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";
import { randomUUID } from "node:crypto";
import { useMultipartReader } from "../utils/multipart";

const storage = createStorage({
	driver: fsLiteDriver({ base: "./resources" }),
});

const saveFile = async (file: MultiPartData) => {
	const [_mime, ext] = String(file.type).split("/");
	const fileName = randomUUID() + "." + ext;

	await storage.setItemRaw(`files/${fileName}`, file.data);
};

export default defineEventHandler(async (event) => {
	try {
		const body = await useMultipartReader(event);
		if (body.file) {
			await saveFile(body.file);
		}
		const files = (Array.isArray(body.files) ? body.files : []).map((v) => v.file);

		for (let i = 0; i < files.length; i++) {
			if (files[i]) {
				await saveFile(files[i]);
			}
		}

		console.log(body.files);
		return { success: true };
	} catch (err) {
		console.error(err);
		throw createError({
			statusCode: 500,
			statusMessage: "An error occurred while processing the event",
		});
	}
});
