import Image from 'next/image'
import { FaLinkedin } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import PageHeader from '@/components/layout/PageHeader'
import AboutDescription from '@/components/ui/AboutDescription'
import CtaBand from '@/components/ui/CtaBand'
import { siteConfig } from '@/data/site-config'

const quickFacts = [
  { label: 'Herkunft', value: 'Saranda, Albanien' },
  { label: 'Zuhause', value: 'Deutschland' },
  { label: 'Beruf', value: 'IT Supplier Manager' },
  { label: 'Herz schlägt für', value: 'Reisen & Kulturen' },
]

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow='Über mich'
        title='Hinter jeder Reise steckt eine Geschichte'
        subtitle='Albanerin, Wahl-Deutsche, Mutter, Reisebegeisterte — lernen Sie mich etwas näher kennen.'
        currentLabel='Über mich'
        image='/images/reports/saranda/saranda1.jpeg'
      />

      <section className='py-20 sm:py-28'>
        <Container>
          <div className='grid items-start gap-14 lg:grid-cols-2 lg:gap-20'>
            <div className='lg:order-1'>
              <AboutDescription
                paragraphs={[
                  'Ich bin Olesja – Albanerin, Wahl-Deutsche, Mutter von zwei wunderbaren Kindern und stolze Katzen- und Hundemama von Sussi, Saltzi und meinem Golden Retriever Onyx. Mein Leben ist eine bunte Mischung aus Familie, Reisen, internationalen Begegnungen und spannenden beruflichen Herausforderungen.',
                  'Beruflich arbeite ich als IT Supplier Manager und bewege mich täglich zwischen Technologie, Verhandlungen und internationalen Partnerschaften. Privat schlägt mein Herz für das Reisen, gutes Essen, neue Kulturen und besondere Orte mit Geschichte.',
                  'Meine Heimat Saranda an der albanischen Riviera hat einen ganz besonderen Platz in meinem Herzen. Gleichzeitig liebe ich es, die Welt zu entdecken, durch historische Altstädte zu schlendern, lokale Spezialitäten zu probieren und versteckte Orte abseits der bekannten Touristenpfade zu finden. Wer mich kennt, weiß: Über Orte, die ich liebe, könnte ich stundenlang sprechen.',
                  'Auf diesem Blog teile ich persönliche Reiseerlebnisse, praktische Tipps und meine Lieblingsorte aus aller Welt. Dabei geht es mir nicht nur um Sehenswürdigkeiten, sondern vor allem um die Menschen, Geschichten und besonderen Momente, die eine Reise unvergesslich machen.',
                  'Wenn ich nicht unterwegs bin, verbringe ich meine Zeit am liebsten mit meiner Familie, Sussi, Saltzi und Onyx. Sie erinnern mich jeden Tag daran, wie wichtig Neugier, Zusammenhalt und die Freude an den kleinen Dingen des Lebens sind.',
                  'Kurz gesagt: Ich liebe es, neue Erfahrungen zu sammeln, die Welt mit offenen Augen zu entdecken und meine Begeisterung für besondere Orte mit anderen zu teilen. Jede Reise erzählt ihre eigene Geschichte – und genau diese Geschichten möchte ich weitergeben.',
                ]}
              />

              <a
                href={siteConfig.linkedinUrl}
                target='_blank'
                rel='noopener noreferrer'
                className='mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-forest hover:text-coral-deep'
              >
                <FaLinkedin className='h-5 w-5' aria-hidden='true' />
                Vernetzen Sie sich auf LinkedIn
              </a>

              {/* Quick facts */}
              <dl className='mt-12 grid grid-cols-2 gap-6 border-t border-forest/10 pt-8 sm:grid-cols-4'>
                {quickFacts.map((fact) => (
                  <div key={fact.label}>
                    <dt className='font-display text-xs font-bold uppercase tracking-wide text-ink/40'>
                      {fact.label}
                    </dt>
                    <dd className='mt-1 font-sans text-sm font-semibold text-forest'>{fact.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className='relative mx-auto aspect-[4/5] w-full max-w-md lg:order-2 lg:sticky lg:top-28 lg:mx-0 lg:ml-auto'>
              <div className='blob-mask-alt absolute inset-0 overflow-hidden shadow-xl'>
                <Image
                  src='/images/hero/agent1.jpeg'
                  alt={`Portrait von ${siteConfig.agentName}`}
                  fill
                  sizes='(min-width: 1024px) 448px, 90vw'
                  className='object-cover'
                />
              </div>
              <div className='absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-butter/70' />
            </div>
          </div>
        </Container>
      </section>

      {/* Pull quote */}
      <section className='bg-forest py-16 sm:py-24'>
        <Container>
          <blockquote className='mx-auto max-w-3xl text-center'>
            <p className='font-display text-2xl font-semibold leading-snug text-balance text-white sm:text-4xl'>
              „Ich liebe es, neue Erfahrungen zu sammeln, die Welt mit offenen Augen zu entdecken und meine
              Begeisterung für besondere Orte mit anderen zu teilen.“
            </p>
            <footer className='mt-5 font-display text-sm font-semibold text-butter'>
              — {siteConfig.agentName}
            </footer>
          </blockquote>
        </Container>
      </section>

      <CtaBand dividerFrom='bg-forest' />
    </>
  )
}
