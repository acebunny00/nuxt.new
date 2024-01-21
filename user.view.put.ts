import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const updatePosts = await prisma.post.updateMany({
    data: {
      views: {
        increment: 1,
      },
      likes: {
        increment: 1,
      },
    },
  });
}

main();
