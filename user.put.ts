import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const updateUser = await prisma.user.update({
    where: {
      email: "viola@prisma.io",
    },
    data: {
      name: "Viola the Magnificent",
    },
  });
}

main();
