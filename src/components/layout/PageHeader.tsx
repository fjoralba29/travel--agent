import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import WaveDivider from "@/components/ui/WaveDivider";

export default function PageHeader({
    eyebrow,
    title,
    subtitle,
    currentLabel,
    image,
}: {
    eyebrow: string;
    title: string;
    subtitle?: string;
    currentLabel: string;
    /** Optional background photo path, e.g. "/images/hero/agent1.jpeg" */
    image?: string;
}) {
    return (
        <div className='relative -mt-24 pt-24 lg:-mt-28 lg:pt-28'>
            <div className='relative overflow-hidden bg-forest pb-16 pt-8 sm:pb-20'>
                {image && (
                    <>
                        <Image
                            src={image}
                            alt=''
                            fill
                            priority
                            sizes='100vw'
                            className='object-cover opacity-20'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-forest via-forest/90 to-forest/70' />
                    </>
                )}

                <Plane
                    aria-hidden='true'
                    className='animate-float-slow absolute -right-4 top-16 h-24 w-24 -rotate-12 text-butter/25 sm:h-32 sm:w-32'
                />

                <Container className='relative'>
                    <nav
                        aria-label='Breadcrumb'
                        className='flex items-center gap-1.5 font-sans text-sm text-white/55'
                    >
                        <Link
                            href='/'
                            className='hover:text-white'
                        >
                            Home
                        </Link>
                        <ChevronRight
                            className='h-3.5 w-3.5'
                            aria-hidden='true'
                        />
                        <span className='text-white'>{currentLabel}</span>
                    </nav>

                    <p className='mt-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm font-semibold text-butter'>
                        <span className='h-2 w-2 rounded-full bg-butter' />
                        {eyebrow}
                    </p>
                    <h1 className='mt-5 max-w-3xl font-display text-5xl font-semibold leading-[1.02] text-balance text-white sm:text-6xl lg:text-7xl'>
                        {title}
                    </h1>
                    {subtitle && (
                        <p className='mt-6 max-w-xl font-sans text-lg leading-relaxed text-white/75'>
                            {subtitle}
                        </p>
                    )}
                </Container>
            </div>
            <WaveDivider
                bg='bg-forest'
                fill='text-cream'
            />
        </div>
    );
}
