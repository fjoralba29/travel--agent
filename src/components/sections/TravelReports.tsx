"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import { travelReports } from "@/data/travel-reports";

export default function TravelReports() {
    const [active, setActive] = useState(0);

    return (
        <section
            id='meine-reiseberichte'
            className='bg-cream py-20 sm:py-28'
        >
            <Container>
                <SectionHeading
                    eyebrow='Reiseberichte'
                    title='Meine Reiseberichte'
                    className='mx-auto text-center'
                />

                {/* Expanding panel gallery: the first destination is open by
                    default; hovering (or focusing) another one opens that
                    one instead. */}
                <div
                    onMouseLeave={() => setActive(0)}
                    className='mt-14 flex h-[26rem] flex-col gap-3 overflow-hidden rounded-[2rem] shadow-xl sm:h-[30rem] sm:flex-row'
                >
                    {travelReports.map((report, index) => {
                        const isActive = index === active;

                        return (
                            <Link
                                key={report.slug}
                                href={`/meine-reiseberichte/${report.slug}`}
                                onMouseEnter={() => setActive(index)}
                                onFocus={() => setActive(index)}
                                className={`group relative overflow-hidden transition-[flex-grow] duration-500 ease-out ${
                                    isActive ? "flex-[4]" : "flex-[1.2]"
                                }`}
                            >
                                <Image
                                    src={report.coverImage}
                                    alt={`${report.city}, ${report.country}`}
                                    fill
                                    sizes='(min-width: 640px) 40vw, 100vw'
                                    className='object-cover'
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent transition-opacity duration-500 ${
                                        isActive ? "from-ink/70" : ""
                                    }`}
                                />

                                <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5'>
                                    <div className='min-w-0'>
                                        <p className='flex items-center gap-1 font-sans text-xs font-medium text-butter'>
                                            <MapPin
                                                className='h-3.5 w-3.5 shrink-0'
                                                aria-hidden='true'
                                            />
                                            <span className='truncate'>
                                                {report.country}
                                            </span>
                                        </p>
                                        <p className='mt-1 whitespace-nowrap font-display text-lg font-semibold text-white sm:text-xl'>
                                            {report.title}
                                        </p>
                                        <p
                                            className={`mt-1 max-w-xs truncate font-sans text-sm text-white/75 transition-opacity duration-300 ${
                                                isActive
                                                    ? "opacity-100"
                                                    : "opacity-0"
                                            }`}
                                        >
                                            {report.subtitle}
                                        </p>
                                    </div>

                                    <span
                                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white transition-opacity duration-300 ${
                                            isActive
                                                ? "opacity-100"
                                                : "opacity-0"
                                        }`}
                                    >
                                        <ArrowUpRight
                                            className='h-4.5 w-4.5'
                                            aria-hidden='true'
                                        />
                                    </span>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </Container>
        </section>
    );
}
