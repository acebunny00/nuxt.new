import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const createMany = await prisma.user.createMany({
    data: [
      { name: "Bob", email: "bob@prisma.io" },
      { name: "Bobo", email: "bob@prisma.io" }, // Duplicate unique key!
      { name: "Yewande", email: "yewande@prisma.io" },
      { name: "Angelique", email: "angelique@prisma.io" },
    ],
    skipDuplicates: true, // Skip 'Bobo'
  });
}

main();
