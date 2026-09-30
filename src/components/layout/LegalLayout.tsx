import type { ReactNode } from "react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";

export default function LegalLayout({
    eyebrow,
    title,
    currentLabel,
    children,
}: {
    eyebrow: string;
    title: string;
    currentLabel: string;
    children: ReactNode;
}) {
    return (
        <>
            <PageHeader
                eyebrow={eyebrow}
                title={title}
                currentLabel={currentLabel}
            />

            <section className='py-16 sm:py-24'>
                <Container>
                    <div
                        className='max-w-3xl font-sans text-base leading-relaxed text-ink/80
              [&_h2]:mt-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-forest [&_h2:first-child]:mt-0
              [&_h3]:mt-8 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink
              [&_p]:mt-4
              [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6
              [&_a]:font-semibold [&_a]:text-coral-deep [&_a]:underline hover:[&_a]:text-coral
              [&_mark]:rounded [&_mark]:bg-butter/50 [&_mark]:px-1'
                    >
                        {children}
                    </div>
                </Container>
            </section>
        </>
    );
}
