export default defineEventHandler((event) => event.context.prisma.user.findMany());
