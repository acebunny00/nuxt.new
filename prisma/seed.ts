import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const alice = await prisma.example.create({
		data: { details: "alice" },
	});
	const bob = await prisma.example.create({
		data: { details: "bob" },
	});
	const Eloise = await prisma.example.create({
		data: { details: "eloise" },
	});
	console.log({ alice, bob, Eloise });

	const jsmith = await prisma.user.create({
		data: { name: "J Smith", username: "jsmith", email: "jsmith@sidebase.io", password: "hunter2" },
	});
	const bernd = await prisma.user.create({
		data: { name: "Bernd", username: "bernd", email: "bernd@sidebase.io", password: "hunter2" },
	});
	console.log({ jsmith, bernd });
}
main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
