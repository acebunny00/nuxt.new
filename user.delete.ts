import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const deleteUser = await prisma.user.delete({
    where: {
      email: "bert@prisma.io",
    },
  });
}

main();
