import { type MultiPartData, type H3Event } from "h3";
import { parseFormData } from "parse-nested-form-data";

const FILE_KEYS = ["name", "filename", "type", "data"];
const isFile = (data: MultiPartData) => {
	return Object.keys(data).filter((key) => FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length;
	// return (Object.keys(data).filter((key) => FILE_KEYS.indexOf(key) !== -1).length === FILE_KEYS.length && typeof data.data === "string") || Buffer.isBuffer(data.data);
	// return Object.keys(data).filter.call(FILE_KEYS, (k) => FILE_KEYS.includes(k));
	// return Object.keys(data).every((key) => FILE_KEYS.includes(key));
	// return FILE_KEYS.every((key) => data.hasOwnProperty(key));
};
export const useMultipartReader = async (event: H3Event) => {
	const data = await readMultipartFormData(event);

	const arr = (Array.isArray(data) ? data : []) as MultiPartData[];
	const result = arr.reduce((prev: Record<string, any>, curr) => {
		prev[String(curr.name)] = isFile(curr) ? curr : curr.data.toString("utf8");
		return prev;
	}, {} as Record<string, any>);
	return parseFormData(Object.entries(result)) as Record<string, any>;
};
