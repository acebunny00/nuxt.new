import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // By unique identifier
  const user = await prisma.user.findUnique({
    where: {
      email: "elsa@prisma.io",
    },
  });
}

main();
