import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      name: "Bob",
      email: "bob2@prisma.io",
      posts: {
        create: {
          title: "Hello World",
        },
      },
    },
  });
  console.dir(user);

  // const allUsers = await prisma.user.findMany({
  //   include: {
  //     post: true,
  //     profile: true,
  //   },
  // });
  // console.dir(allUsers, { depth: null });
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
