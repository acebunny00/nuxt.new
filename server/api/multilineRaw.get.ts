export default defineEventHandler((event) => {
	const exportData = event.context.prisma.$queryRaw`select * from user`;
	console.log("exportData", exportData);
	return exportData;
});

// exportData {
// 	then: [Function: then],
// 	catch: [Function: catch],
// 	finally: [Function: finally],
// 	requestTransaction: [Function: requestTransaction],
// 	[Symbol(Symbol.toStringTag)]: 'PrismaPromise'
// }
