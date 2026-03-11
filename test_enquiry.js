const { PrismaClient } = require("./src/generated/prisma_v2");
const prisma = new PrismaClient();

async function main() {
    try {
        const tenant = await prisma.tenant.findUnique({
            where: { slug: "bay-ultra-dry" },
        });

        const enquiry = await prisma.enquiry.create({
            data: {
                tenantId: tenant.id,
                fullName: "Test User",
                emailId: "test@example.com",
                phoneNumber: "+6412345678",
                service: "CARPET_CLEANING",
                requiredDate: new Date(),
                requiredTime: "09:00",
                address: "123 Test St",
                message: "Test message",
                confirmed: true,
            },
        });
        console.log("Test enquiry created successfully:", enquiry.id);
    } catch (e) {
        console.error("Test enquiry failed:", e.message);
    } finally {
        await prisma.$disconnect();
    }
}

main();
