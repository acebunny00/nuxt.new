import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const profile = await prisma.profile.create({
    data: {
      bio: "Hello, I'm Bob and I like nothing at all. Just nothing.",
      user: {
        connect: {
          id: 2,
        },
      },
    },
  });
  console.dir(profile);
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
