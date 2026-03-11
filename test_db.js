const { PrismaClient } = require("./src/generated/prisma");
const prisma = new PrismaClient();

async function main() {
    try {
        await prisma.$connect();
        console.log("Connected to database successfully");
        const count = await prisma.tenant.count();
        console.log(`Tenant count: ${count}`);
    } catch (e) {
        console.error("Connection failed:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
