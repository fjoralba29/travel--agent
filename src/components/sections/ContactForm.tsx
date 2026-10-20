"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { ArrowRight, Loader2, CheckCircle2, XCircle } from "lucide-react";
import FormField from "@/components/ui/FormField";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
    const [accepted, setAccepted] = useState(false);
    const [status, setStatus] = useState<Status>("idle");

    const CONTACT_ENDPOINT =
        process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || "/contact.php";
    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setStatus("loading");

        const form = event.currentTarget;
        const data = new FormData(form);
        const payload = Object.fromEntries(data.entries());

        try {
            const res = await fetch(CONTACT_ENDPOINT, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) throw new Error("request_failed");

            const result = await res.json();
            if (!result.success) throw new Error(result.error || "unknown");

            setStatus("success");
            form.reset();
            setAccepted(false);
        } catch {
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className='flex flex-col items-center gap-3 py-10 text-center'>
                <CheckCircle2
                    className='h-12 w-12 text-forest'
                    aria-hidden='true'
                />
                <p className='font-display text-xl font-semibold text-forest'>
                    Nachricht gesendet!
                </p>
                <p className='font-sans text-sm text-ink/60'>
                    Danke für deine Anfrage — ich melde mich schnellstmöglich
                    bei dir.
                </p>
                <button
                    type='button'
                    onClick={() => setStatus("idle")}
                    className='mt-2 font-display text-sm font-semibold text-coral-deep underline'
                >
                    Weitere Nachricht senden
                </button>
            </div>
        );
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

            {status === "error" && (
                <p className='flex items-center gap-2 font-sans text-sm text-red-600'>
                    <XCircle
                        className='h-4 w-4 shrink-0'
                        aria-hidden='true'
                    />
                    Da ist etwas schiefgelaufen. Bitte versuche es erneut oder
                    schreibe direkt eine E-Mail.
                </p>
            )}

            <button
                type='submit'
                disabled={!accepted || status === "loading"}
                className='inline-flex items-center gap-3 rounded-full bg-forest py-1.5 pl-6 pr-1.5 font-display text-sm font-semibold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40'
            >
                {status === "loading" ? "Wird gesendet..." : "Anfrage senden"}
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-coral'>
                    {status === "loading" ? (
                        <Loader2
                            className='h-4 w-4 animate-spin'
                            aria-hidden='true'
                        />
                    ) : (
                        <ArrowRight
                            className='h-4 w-4'
                            aria-hidden='true'
                        />
                    )}
                </span>
            </button>
        </form>
    );
}
