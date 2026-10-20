import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const data = await request.json().catch(() => null);

    if (!data) {
        return NextResponse.json(
            { success: false, error: "invalid_payload" },
            { status: 400 }
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
            { status: 422 }
        );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        return NextResponse.json(
            { success: false, error: "invalid_email" },
            { status: 422 }
        );
    }

    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.ionos.de",
            port: 587,
            secure: false,
            auth: {
                user: process.env.CONTACT_SMTP_USER,
                pass: process.env.CONTACT_SMTP_PASS,
            },
        });

        await transporter.sendMail({
            from: `"Reise Genie Kontaktformular" <${process.env.CONTACT_SMTP_USER}>`,
            to: "olesja@reise-genie.de",
            replyTo: email,
            subject: `Anfrage: ${regarding || "Reiseanfrage"}`,
            text: `Name: ${firstName} ${lastName}\nE-Mail: ${email}\nTelefon: ${
                phone || "-"
            }\n\n${message}`,
        });

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { success: false, error: "send_failed" },
            { status: 500 }
        );
    }
}