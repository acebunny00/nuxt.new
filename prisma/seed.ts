import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
	const alice = await prisma.user.create({
		data: { name: "alice", image: "https://randomuser.me/api/portraits/women/85.jpg" },
	});
	const bob = await prisma.user.create({
		data: { name: "bob", image: "https://randomuser.me/api/portraits/men/83.jpg" },
	});
	const Eloise = await prisma.user.create({
		data: { name: "eloise", image: "https://randomuser.me/api/portraits/women/20.jpg" },
	});
	console.log({ alice, bob, Eloise });
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
