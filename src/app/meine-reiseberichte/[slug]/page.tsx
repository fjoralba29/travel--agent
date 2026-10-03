import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CalendarDays, Clock, MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import WaveDivider from "@/components/ui/WaveDivider";
import ShareButtons from "@/components/travel-report/ShareButtons";
import ReportGallery from "@/components/travel-report/ReportGallery";
import RelatedReports from "@/components/sections/RelatedReports";
import Contact from "@/components/sections/Contact";
import { travelReports, getReportBySlug } from "@/data/travel-reports";
import { siteConfig } from "@/data/site-config";
import { getReadingTime } from "@/lib/reading-time";

export function generateStaticParams() {
    return travelReports.map((report) => ({ slug: report.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const report = getReportBySlug(slug);
    if (!report) return {};

    return {
        title: report.title,
        description: report.description,
        alternates: { canonical: `/travel-reports/${report.slug}/` },
        openGraph: {
            title: report.title,
            description: report.description,
            images: [report.coverImage],
            type: "article",
            publishedTime: report.date,
        },
    };
}

export default async function TravelReportPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const report = getReportBySlug(slug);
    if (!report) notFound();

    const heroImage =
        report.gallery.length > 0
            ? report.gallery[Math.floor(Math.random() * report.gallery.length)]
            : report.coverImage;
    const readingTime = getReadingTime(report.content);

    const pageUrl = `${siteConfig.url}/travel-reports/${report.slug}/`;

    return (
        <>
            <article>
                {/* Hero image */}
                <div className='relative -mt-24 aspect-[21/9] max-h-[520px] w-full overflow-hidden lg:-mt-28'>
                    <Image
                        src={heroImage}
                        alt={`${report.city}, ${report.country}`}
                        fill
                        priority
                        sizes='100vw'
                        className='object-cover'
                    />
                    <div className='absolute inset-0 bg-gradient-to-t from-ink via-ink/40 to-transparent' />

                    <div className='absolute inset-x-0 bottom-0 pb-14 pt-20'>
                        <Container>
                            <p className='inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3.5 py-1.5 font-display text-sm font-semibold text-butter'>
                                <MapPin
                                    className='h-4 w-4'
                                    aria-hidden='true'
                                />
                                {report.country}
                            </p>
                            <h1 className='mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.05] text-balance text-white sm:text-5xl lg:text-6xl'>
                                {report.title}
                            </h1>
                            <p className='mt-2 font-sans text-lg text-white/75'>
                                {report.subtitle}
                            </p>
                        </Container>
                    </div>
                </div>
                <WaveDivider
                    bg='bg-ink'
                    fill='text-cream'
                />

                <Container>
                    <div className='flex flex-col gap-6 border-b border-forest/10 py-8 sm:flex-row sm:items-center sm:justify-between'>
                        <div className='flex items-center gap-3'>
                            <div className='relative h-12 w-12 shrink-0 overflow-hidden rounded-full ring-4 ring-butter'>
                                <Image
                                    src='/images/hero/agent.jpeg'
                                    alt={siteConfig.agentName}
                                    fill
                                    sizes='48px'
                                    className='object-cover'
                                />
                            </div>
                            <div>
                                <p className='font-display text-sm font-bold text-forest'>
                                    {siteConfig.agentName}
                                </p>
                                <a
                                    href={`mailto:${siteConfig.email}`}
                                    className='font-sans text-sm text-ink/55 hover:text-coral-deep'
                                >
                                    {siteConfig.email}
                                </a>
                            </div>
                        </div>

                        <div className='flex flex-wrap items-center gap-x-5 gap-y-2 font-sans text-sm text-ink/55'>
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
                                {readingTime} min Lesezeit
                            </span>
                        </div>
                    </div>

                    {/* Description */}
                    <div className='max-w-3xl py-12'>
                        {report.content.length > 0 ? (
                            <div className='space-y-5 font-sans text-lg leading-8 text-ink/80 [&_b]:font-display [&_b]:text-xl [&_b]:font-semibold [&_b]:text-forest'>
                                {report.content.map((paragraph, index) => (
                                    <p
                                        key={index}
                                        dangerouslySetInnerHTML={{
                                            __html: paragraph,
                                        }}
                                    />
                                ))}
                            </div>
                        ) : (
                            <p className='font-sans text-lg leading-8 text-ink/80'>
                                {report.description}
                            </p>
                        )}

                        <div className='mt-10'>
                            <ShareButtons
                                url={pageUrl}
                                title={report.title}
                            />
                        </div>
                    </div>

                    {/* Gallery */}
                    {report.gallery.length > 0 && (
                        <div className='pb-16'>
                            <ReportGallery
                                images={report.gallery}
                                alt={`${report.city}, ${report.country}`}
                            />
                        </div>
                    )}
                </Container>
            </article>

            <RelatedReports currentSlug={report.slug} />
            <Contact />
        </>
    );
}
