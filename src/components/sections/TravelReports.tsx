'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, MapPin } from 'lucide-react'
import Container from '@/components/ui/Container'
import SectionHeading from '@/components/ui/SectionHeading'
import { travelReports } from '@/data/travel-reports'

export default function TravelReports() {
  const [active, setActive] = useState(0)

  return (
    <section id='meine-reiseberichte' className='bg-cream py-20 sm:py-28'>
      <Container>
        <SectionHeading eyebrow='Reiseberichte' title='Meine Reiseberichte' className='mx-auto text-center' />

        <div
          onMouseLeave={() => setActive(0)}
          className='mt-14 flex flex-col gap-4 sm:h-[30rem] sm:flex-row sm:gap-3 sm:overflow-hidden sm:rounded-[2rem] sm:shadow-xl'
        >
          {travelReports.map((report, index) => {
            const isActive = index === active

            return (
              <Link
                key={report.slug}
                href={`/meine-reiseberichte/${report.slug}`}
                onMouseEnter={() => setActive(index)}
                onFocus={() => setActive(index)}
                className={`group relative block h-56 overflow-hidden rounded-[1.5rem] shadow-lg transition-[flex-grow] duration-500 ease-out sm:h-auto sm:rounded-none sm:shadow-none ${
                  isActive ? 'sm:flex-[4]' : 'sm:flex-[1.2]'
                }`}
              >
                <Image
                  src={report.coverImage}
                  alt={`${report.city}, ${report.country}`}
                  fill
                  sizes='(min-width: 640px) 40vw, 100vw'
                  className='object-cover transition-transform duration-700 sm:group-hover:scale-105'
                />

                <div
                  className={`absolute inset-0 bg-gradient-to-t from-ink/75 via-ink/15 to-transparent ${
                    isActive ? 'sm:from-ink/70' : ''
                  }`}
                />

                <div className='absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5'>
                  <div className='min-w-0'>
                    <p className='flex items-center gap-1 font-sans text-xs font-medium text-butter'>
                      <MapPin className='h-3.5 w-3.5 shrink-0' aria-hidden='true' />
                      <span className='truncate'>{report.country}</span>
                    </p>

                    <p className='mt-1 font-display text-xl font-semibold text-white'>{report.title}</p>

                    <p className='mt-1 max-w-xs truncate font-sans text-sm text-white/75 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100'>
                      {report.subtitle}
                    </p>
                  </div>

                  <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm sm:opacity-0 sm:transition-opacity sm:duration-300 sm:group-hover:opacity-100'>
                    <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
                  </span>
                </div>
              </Link>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
