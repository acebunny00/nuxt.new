import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    data: {
      id: 4,
      email: "bob3@prisma.io",
      name: "Bob Prismo",
      profile: {
        create: {
          bio: "Hello, I'm Bob Prismo and I love apples, blue nail varnish, and the sound of buzzing mosquitoes.",
        },
      },
    },
  });
  console.dir(user);
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
