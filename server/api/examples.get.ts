/**
 * Fetch all `examples` from the database. Run `npx prisma db push` at least once for this to work.
 *
 * If you are using `tRPC` you can access the prisma-client by adding it to the context:
 * ```ts
 * export async function createContext(event: H3Event) {
 *   return { prisma: event.context.prisma }
 * }
 *
 * export type Context = inferAsyncReturnType<typeof createContext>
 * ```
 */

export default defineEventHandler((event) =>
	// Raw query
	// event.context.prisma.$queryRaw`select * from example`

	// one line
	// event.context.prisma.example.findMany()

	// multi line
	{
		const count = event.context.prisma.example.findMany();
		return count;
	}
);
