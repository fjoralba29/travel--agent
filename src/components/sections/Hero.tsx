import Image from "next/image";
import { CheckCircle2, MapPin, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import WaveDivider from "@/components/ui/WaveDivider";
import { siteConfig } from "@/data/site-config";

const chips = siteConfig.description
    .split(".")
    .map((part) => part.trim())
    .filter(Boolean);

export default function Hero() {
    return (
        <section
            id='start'
            className='relative isolate -mt-24 overflow-hidden bg-forest pb-20 pt-32 lg:-mt-28 lg:pb-28 lg:pt-40'
        >
            {/* Decorative dot grid + plane, echoing the "travel" theme without
                relying on any specific logo artwork */}
            <div
                aria-hidden='true'
                className='absolute inset-0 opacity-[0.07]'
                style={{
                    backgroundImage:
                        "radial-gradient(circle, white 1.5px, transparent 1.5px)",
                    backgroundSize: "28px 28px",
                }}
            />
            <Plane
                aria-hidden='true'
                className='animate-float-slow absolute left-[8%] top-24 h-10 w-10 rotate-45 text-butter/40'
            />
            <Plane
                aria-hidden='true'
                className='animate-float-slow absolute bottom-24 right-[6%] h-14 w-14 -rotate-12 text-coral/40'
                style={{ animationDelay: "1.5s" }}
            />

            <Container className='relative'>
                <div className='grid items-center gap-16 lg:grid-cols-2'>
                    {/* Text */}
                    <div className='max-w-xl text-white'>
                        <p className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm font-semibold text-butter'>
                            <span className='h-2 w-2 rounded-full bg-butter' />
                            Ihr Reisebüro
                        </p>
                        <h1 className='mt-6 font-display text-5xl font-semibold leading-[1.02] text-balance sm:text-6xl lg:text-7xl'>
                            Persönliche Reiseberatung
                        </h1>

                        <div className='mt-7 flex flex-wrap gap-2.5'>
                            {chips.map((chip) => (
                                <span
                                    key={chip}
                                    className='inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 font-sans text-sm font-medium text-white/90'
                                >
                                    <CheckCircle2
                                        className='h-4 w-4 text-butter'
                                        aria-hidden='true'
                                    />
                                    {chip}
                                </span>
                            ))}
                        </div>

                        <div className='mt-10 flex flex-col gap-4 sm:flex-row'>
                            <Button
                                href='/meine-reiseberichte'
                                variant='primary'
                            >
                                Reiseberichte lesen
                            </Button>
                            <Button
                                href='/kontakt'
                                variant='outlineLight'
                            >
                                Jetzt Reise anfragen
                            </Button>
                        </div>
                    </div>

                    {/* Photo collage */}
                    <div className='relative mx-auto h-[26rem] w-full max-w-sm sm:h-[30rem] lg:mx-0 lg:ml-auto'>
                        <div className='blob-mask absolute inset-0 overflow-hidden shadow-2xl'>
                            <Image
                                src='/images/hero/agent.jpeg'
                                alt={`Portrait of ${siteConfig.agentName}`}
                                fill
                                sizes='(min-width: 1024px) 380px, 320px'
                                className='object-cover'
                            />
                        </div>

                        <div className='absolute -left-8 bottom-6 h-32 w-32 overflow-hidden rounded-full ring-4 ring-forest sm:h-40 sm:w-40'>
                            <Image
                                src='/images/hero/hero1.jpg'
                                alt='Reiseziel'
                                fill
                                sizes='160px'
                                className='object-cover'
                            />
                        </div>

                        <div className='absolute -right-2 top-4 flex items-center gap-2 rounded-2xl bg-white px-4 py-3 shadow-xl sm:right-0'>
                            <div className='flex h-9 w-9 items-center justify-center rounded-full bg-coral/10'>
                                <MapPin
                                    className='h-4.5 w-4.5 text-coral'
                                    aria-hidden='true'
                                />
                            </div>
                            <div>
                                <p className='font-display text-sm font-bold leading-tight text-forest'>
                                    {siteConfig.agentName}
                                </p>
                                <p className='font-sans text-xs text-ink/55'>
                                    {siteConfig.agentTitle}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <WaveDivider
                bg=''
                fill='text-cream'
                className='absolute inset-x-0 bottom-0'
            />
        </section>
    );
}
