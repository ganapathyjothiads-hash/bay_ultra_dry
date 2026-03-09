import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, emailId, phoneNumber, service, requiredDate, address, message, confirmed } = body;

        // Basic validation
        if (!fullName || !emailId || !phoneNumber || !service || !requiredDate || !address || !confirmed) {
            return NextResponse.json(
                { error: "Missing required fields or confirmation" },
                { status: 400 }
            );
        }

        const enquiry = await prisma.enquiry.create({
            data: {
                fullName,
                emailId,
                phoneNumber,
                service,
                requiredDate: new Date(requiredDate),
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
