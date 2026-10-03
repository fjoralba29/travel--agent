import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import type { TravelReport } from "@/types/travel-report";

export default function TravelReportCard({ report }: { report: TravelReport }) {
    return (
        <Link
            href={`/meine-reiseberichte/${report.slug}`}
            className='group block'
        >
            <div className='relative rounded-[1.75rem] bg-white shadow-lg transition-shadow group-hover:shadow-2xl'>
                <div className='relative aspect-[4/3] overflow-hidden rounded-t-[1.75rem]'>
                    <Image
                        src={report.coverImage}
                        alt={`${report.city}, ${report.country}`}
                        fill
                        sizes='(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw'
                        className='object-cover transition-transform duration-500 group-hover:scale-105'
                    />
                </div>

                <div className='absolute right-5 top-[calc(75%-1.6rem)] flex h-12 w-12 items-center justify-center rounded-full bg-coral text-white shadow-lg ring-4 ring-white'>
                    <MapPin
                        className='h-5 w-5'
                        aria-hidden='true'
                    />
                </div>

                <div className='p-6 pt-5'>
                    <p className='font-display text-sm font-semibold uppercase tracking-wide text-coral-deep'>
                        {report.country}
                    </p>

                    <h3 className='mt-1.5 font-display text-2xl font-semibold leading-snug text-forest'>
                        {report.title}
                    </h3>

                    <p className='mt-2 line-clamp-2 font-sans text-sm leading-relaxed text-ink/60'>
                        {report.description}
                    </p>

                    <span className='mt-5 inline-flex items-center gap-1.5 rounded-full bg-forest/5 px-4 py-2 font-display text-sm font-semibold text-forest transition-colors group-hover:bg-forest group-hover:text-white'>
                        Mehr Lesen
                        <ArrowRight
                            className='h-4 w-4 transition-transform duration-300 group-hover:translate-x-1'
                            aria-hidden='true'
                        />
                    </span>
                </div>
            </div>
        </Link>
    );
}
