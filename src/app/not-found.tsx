// src/app/not-found.tsx
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function NotFound() {
    return (
        <section className='-mt-24 bg-cream py-32 pt-32 text-center text-forest lg:-mt-28'>
            <Container>
                <Image
                    src='/images/hero/genie.png'
                    alt=''
                    width={200}
                    height={200}
                    className='animate-float-slow mx-auto w-40'
                />
                <p className='mt-6 inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-display text-sm font-semibold text-coral'>
                    <span className='h-2 w-2 rounded-full bg-coral' />
                    404
                </p>
                <h1 className='mt-5 font-display text-5xl font-semibold tracking-tight sm:text-7xl'>
                    Dieser Wunsch bleibt leider unerfüllt
                </h1>
                <p className='mt-4 font-sans text-forest/70'>
                    Die gesuchte Seite gibt es nicht — der Genie konnte sie
                    nirgends finden.
                </p>
            </Container>
        </section>
    );
}
