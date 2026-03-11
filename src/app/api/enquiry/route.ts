import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, emailId, phoneNumber, service, requiredDate, requiredTime, address, message, confirmed } = body;

        // Basic validation
        if (!fullName || !emailId || !phoneNumber || !service || !requiredDate || !address || !confirmed) {
            return NextResponse.json(
                { error: "Missing required fields or confirmation" },
                { status: 400 }
            );
        }

        // For multi-tenancy, we need to associate this enquiry with a tenant.
        const tenantSlug = request.headers.get("x-tenant-slug") || "bay-ultra-dry";

        let tenant = await prisma.tenant.findUnique({
            where: { slug: tenantSlug },
        });

        // If tenant doesn't exist, create it (for initial setup/seeding)
        if (!tenant) {
            tenant = await prisma.tenant.create({
                data: {
                    name: "Bay Ultra Dry",
                    slug: tenantSlug,
                },
            });
        }

        const enquiry = await prisma.enquiry.create({
            data: {
                tenantId: tenant.id,
                fullName,
                emailId,
                phoneNumber,
                service,
                requiredDate: new Date(requiredDate),
                requiredTime,
                address,
                message,
                confirmed,
            },
        });

        return NextResponse.json(
            { message: "Enquiry submitted successfully", id: enquiry.id },
            { status: 201 }
        );
    } catch (error: any) {
        console.error("Error submitting enquiry:", error);
        return NextResponse.json(
            { error: "Failed to submit enquiry. Please try again later." },
            { status: 500 }
        );
    }
}
