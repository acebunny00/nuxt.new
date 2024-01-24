import { type MultiPartData } from "h3";
import { createStorage } from "unstorage";
import fsLiteDriver from "unstorage/drivers/fs-lite";
import { randomUUID } from "node:crypto";
import { parseFormData } from "parse-nested-form-data";

const storage = createStorage({
	driver: fsLiteDriver({ base: "./resources" }),
});

const FILE_KEYS = ["name", "filename", "type", "data"];
const isFile = (data: MultiPartData) => {
	return Object.keys(data).filter((key) => FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length;
	// return (Object.keys(data).filter((key) => FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length && typeof data.data === "string") || Buffer.isBuffer(data.data);
	// return Object.keys(data).filter.call(FILE_KEYS, (k) => FILE_KEYS.includes(k));
	// return Object.keys(data).every((key) => FILE_KEYS.includes(key));
	// return FILE_KEYS.every((key) => data.hasOwnProperty(key));
};
const parseMultipart = (data?: MultiPartData[]) => {
	const arr = (Array.isArray(data) ? data : []) as MultiPartData[];
	const result = arr.reduce((prev: Record<string, any>, curr) => {
		prev[String(curr.name)] = isFile(curr) ? curr : curr.data.toString("utf8");
		return prev;
	}, {} as Record<string, any>);
	return parseFormData(Object.entries(result)) as Record<string, any>;
};

const saveFile = async (file: MultiPartData) => {
	const [_mime, ext] = String(file.type).split("/");
	const fileName = randomUUID() + "." + ext;

	await storage.setItemRaw(`files/${fileName}`, file.data);
};

export default defineEventHandler(async (event) => {
	try {
		const body = await readMultipartFormData(event);
		const parsed = parseMultipart(body);
		if (parsed.file) {
			await saveFile(parsed.file);
		}
		const files = (Array.isArray(parsed.files) ? parsed.files : []).map((v) => v.file);

		for (let i = 0; i < files.length; i++) {
			if (files[i]) {
				await saveFile(files[i]);
			}
		}

		console.log(parsed.files);
		return { success: true };
	} catch (err) {
		console.error(err);
		throw createError({
			statusCode: 500,
			statusMessage: "An error occurred while processing the event",
		});
	}
});
