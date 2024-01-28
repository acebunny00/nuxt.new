import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let user = null;
  let error = null;

  if (body.email)
    await prisma.user
      .delete({
        where: {
          email: body.email,
        },
      })
      .then((res) => {
        user = res;
      })
      .catch(async (err) => {
        error = err;
      });

  if (error)
    throw createError({
      statusMessage: "Server error. Please send acebunny00@gmail.com",
    });

  return {
    user: user,
  };
});
