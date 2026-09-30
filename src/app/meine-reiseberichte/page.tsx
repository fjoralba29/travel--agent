import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import CtaBand from "@/components/ui/CtaBand";
import { travelReports } from "@/data/travel-reports";
import { getExcerpt } from "@/lib/excerpt";
import { getReadingTime } from "@/lib/reading-time";

export default function TravelReports() {
    return (
        <>
            <PageHeader
                eyebrow='Meine Reiseberichte'
                title='Orte, die ich selbst erlebt habe'
                subtitle='Persönliche Eindrücke, Tipps und Lieblingsplätze — direkt aus erster Hand.'
                currentLabel='Meine Reiseberichte'
                image='/images/reports/santorini/santorini11.jpeg'
            />

            <section className='bg-cream py-20 sm:py-28'>
                <Container>
                    <div className='space-y-20 sm:space-y-28'>
                        {travelReports.map((report, index) => {
                            const excerpt =
                                getExcerpt(report.content) ||
                                report.description;
                            const readingTime = getReadingTime(report.content);

                            const href = `/meine-reiseberichte/${report.slug}`;
                            const reversed = index % 2 === 1;

                            return (
                                <article
                                    key={report.slug}
                                    className='grid items-center gap-10 lg:grid-cols-2 lg:gap-16'
                                >
                                    {/* Image */}
                                    <Link
                                        href={href}
                                        className={`group relative block ${
                                            reversed ? "lg:order-2" : ""
                                        }`}
                                    >
                                        <div className='blob-mask relative isolate aspect-[4/3] transform-gpu overflow-hidden shadow-xl'>
                                            <Image
                                                src={report.coverImage}
                                                alt={`${report.city}, ${report.country}`}
                                                fill
                                                priority={index === 0}
                                                sizes='(min-width: 1024px) 50vw, 100vw'
                                                className='object-cover transition-transform duration-700 group-hover:scale-105'
                                            />
                                        </div>
                                        <div
                                            className={`absolute -bottom-4 h-20 w-20 rounded-full bg-butter/70 ${
                                                reversed
                                                    ? "-right-4"
                                                    : "-left-4"
                                            }`}
                                        />
                                    </Link>

                                    {/* Text */}
                                    <div>
                                        <p className='inline-flex items-center gap-1.5 rounded-full bg-coral/10 px-3.5 py-1.5 font-display text-sm font-semibold text-coral-deep'>
                                            <MapPin
                                                className='h-4 w-4'
                                                aria-hidden='true'
                                            />
                                            {report.country}
                                        </p>

                                        <h2 className='mt-4 font-display text-3xl font-semibold leading-[1.05] text-balance text-forest sm:text-4xl'>
                                            {report.title}
                                        </h2>

                                        <p className='mt-2 font-sans text-lg font-medium text-ink/45'>
                                            {report.subtitle}
                                        </p>

                                        <p className='mt-5 font-sans text-base leading-relaxed text-ink/70'>
                                            {excerpt}
                                        </p>

                                        <div className='mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm text-ink/50'>
                                            <span className='flex items-center gap-1.5'>
                                                <CalendarDays
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                />
                                                {report.date}
                                            </span>
                                            <span className='flex items-center gap-1.5'>
                                                <Clock
                                                    className='h-4 w-4'
                                                    aria-hidden='true'
                                                />
                                                {readingTime} Min. Lesezeit
                                            </span>
                                        </div>

                                        <Link
                                            href={href}
                                            className='mt-8 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-display text-sm font-semibold text-white transition-colors hover:bg-forest-deep'
                                        >
                                            Entdecken
                                            <ArrowRight
                                                className='h-4 w-4'
                                                aria-hidden='true'
                                            />
                                        </Link>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </Container>
            </section>

            <CtaBand />
        </>
    );
}
