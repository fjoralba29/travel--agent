import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    const data = await request.json().catch(() => null);

    if (!data) {
        return NextResponse.json(
            { success: false, error: "invalid_payload" },
            { status: 400 },
        );
    }

    const firstName = String(data.firstName || "").trim();
    const lastName = String(data.lastName || "").trim();
    const email = String(data.email || "").trim();
    const phone = String(data.phone || "").trim();
    const regarding = String(data.regarding || "").trim();
    const message = String(data.message || "").trim();

    if (!firstName || !lastName || !message) {
        return NextResponse.json(
            { success: false, error: "missing_fields" },
            { status: 422 },
        );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return NextResponse.json(
            { success: false, error: "invalid_email" },
            { status: 422 },
        );
    }

    try {
        const { error } = await resend.emails.send({
            from: "Reise Genie Kontaktformular <kontakt@reise-genie.de>",
            to: "olesja@reise-genie.de",
            replyTo: email,
            subject: `Anfrage: ${regarding || "Reiseanfrage"}`,
            text: `Name: ${firstName} ${lastName}\nE-Mail: ${email}\nTelefon: ${
                phone || "-"
            }\n\n${message}`,
        });

        if (error) {
            return NextResponse.json(
                { success: false, error: "send_failed" },
                { status: 500 },
            );
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { success: false, error: "send_failed" },
            { status: 500 },
        );
    }
}
