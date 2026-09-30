"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import FormField from "@/components/ui/FormField";
import { siteConfig } from "@/data/site-config";

export default function ContactForm() {
    const [accepted, setAccepted] = useState(false);

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const subject = `Inquiry: ${data.get("regarding") || "Travel request"}`;
        const body = [
            `Name: ${data.get("firstName")} ${data.get("lastName")}`,
            `Email: ${data.get("email")}`,
            `Phone: ${data.get("phone")}`,
            "",
            `${data.get("message")}`,
        ].join("\n");

        window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
            subject,
        )}&body=${encodeURIComponent(body)}`;
    }

    return (
        <form
            onSubmit={handleSubmit}
            className='space-y-6'
        >
            <div className='grid gap-6 sm:grid-cols-2'>
                <FormField
                    label='Vorname'
                    name='firstName'
                    placeholder='Vorname'
                    required
                />
                <FormField
                    label='Nachname'
                    name='lastName'
                    placeholder='Nachname'
                    required
                />
                <FormField
                    label='E-Mail'
                    name='email'
                    type='email'
                    placeholder='E-Mail'
                    required
                />
                <FormField
                    label='Telefonnummer'
                    name='phone'
                    type='tel'
                    placeholder='Telefonnummer'
                />
            </div>

            <FormField
                label='Betreff'
                name='regarding'
                placeholder='Betreff'
            />

            <FormField
                as='textarea'
                label='Deine Anfrage'
                name='message'
                placeholder='Schreibe hier deine Anfrage rein.'
                required
            />

            <label className='flex items-start gap-3 font-sans text-sm text-ink'>
                <input
                    type='checkbox'
                    checked={accepted}
                    onChange={(event) => setAccepted(event.target.checked)}
                    required
                    className='mt-0.5 h-5 w-5 shrink-0 rounded-md border-forest/20 accent-coral focus:ring-coral/40'
                />
                <span>
                    Ich habe die{" "}
                    <Link
                        href='/datenschutz'
                        className='font-bold text-coral-deep underline'
                    >
                        Datenschutzerklärung
                    </Link>{" "}
                    gelesen &amp; akzeptiere diese.
                </span>
            </label>

            <button
                type='submit'
                disabled={!accepted}
                className='inline-flex items-center gap-3 rounded-full bg-forest py-1.5 pl-6 pr-1.5 font-display text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40'
            >
                Anfrage senden
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-coral'>
                    <ArrowRight
                        className='h-4 w-4'
                        aria-hidden='true'
                    />
                </span>
            </button>
        </form>
    );
}
