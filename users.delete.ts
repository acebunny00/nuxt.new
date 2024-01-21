import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const deleteUsers = await prisma.user.deleteMany({
    where: {
      email: {
        contains: "prisma.io",
      },
    },
  });
}

main();
