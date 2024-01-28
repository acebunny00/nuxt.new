import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const email = body.email;
  const name = body.name;

  if (!(email && name))
    throw createError({
      statusCode: 400,
      statusMessage: "Missing email or name",
    });

  let user;
  if (email && name) {
    user = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        name: name,
      },
    });
  }
  return user;
});
