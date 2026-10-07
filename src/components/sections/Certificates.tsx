// src/components/sections/Certificates.tsx

import Image from 'next/image'
import { Award, ArrowUpRight } from 'lucide-react'
import Container from '@/components/ui/Container'
import { certificates } from '@/data/certificates'

export default function Certificates() {
  return (
    <section className='bg-cream py-20 sm:py-28'>
      <Container>
        <div className='grid gap-10 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-16'>
          <div>
            <p className='inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-display text-sm font-semibold text-coral-deep'>
              <span className='h-2 w-2 rounded-full bg-coral' />
              Qualifikationen
            </p>
            <h2 className='mt-4 font-display text-4xl font-semibold leading-[1.05] text-balance text-forest sm:text-5xl'>
              Geprüfte Reiseexpertise
            </h2>
            <p className='mt-4 font-sans text-base leading-relaxed text-ink/65'>
              Regelmäßige Schulungen bei führenden Reiseveranstaltern sorgen dafür, dass meine Empfehlungen
              immer aktuell und fundiert sind.
            </p>
          </div>

          <div className='divide-y divide-forest/10 rounded-[1.75rem] bg-white shadow-lg'>
            {certificates.map((cert) => (
              <a
                key={cert.title + cert.issuer}
                href={cert.image}
                target='_blank'
                rel='noopener noreferrer'
                className='group flex items-center gap-6 p-6 transition-colors hover:bg-forest/5 sm:p-8'
              >
                <div className='relative aspect-[5/7] w-32 shrink-0 overflow-hidden rounded-xl border border-forest/80 bg-white  shadow-sm sm:w-44'>
                  <Image
                    src={cert.image}
                    alt={`${cert.title} – ${cert.issuer}`}
                    fill
                    sizes='176px'
                    className='object-contain p-1.5  rounded-xl'
                  />
                </div>

                <div className='min-w-0 flex-1'>
                  <div className='flex items-center gap-2'>
                    <Award className='h-4 w-4 shrink-0 text-coral' aria-hidden='true' />
                    <p className='font-display text-lg font-semibold text-forest'>{cert.title}</p>
                  </div>
                  <p className='mt-1 font-sans text-sm text-ink/60'>{cert.issuer}</p>
                  <p className='mt-1 font-sans text-xs font-medium uppercase tracking-wide text-ink/40'>
                    {cert.date}
                  </p>
                </div>

                <span className='flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest/5 text-forest transition-colors group-hover:bg-forest group-hover:text-white'>
                  <ArrowUpRight className='h-4 w-4' aria-hidden='true' />
                </span>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
