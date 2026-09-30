import Image from "next/image";
import { Compass } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/layout/PageHeader";
import CtaBand from "@/components/ui/CtaBand";
import { expertiseItems } from "@/data/expertise";

const tints = [
    "from-forest/10 via-forest/50 to-forest/95",
    "from-coral/10 via-coral/55 to-coral-deep/95",
    "from-butter/10 via-butter/60 to-ink/90",
    "from-forest-deep/10 via-forest-deep/55 to-forest-deep/95",
];

const offsets = ["", "sm:mt-10", "", "sm:mt-10"];

export default function Expertise() {
    return (
        <>
            <PageHeader
                eyebrow='Meine Expertise'
                title='Für jede Art von Reise die richtige Idee'
                subtitle='Ob Strandurlaub, Städtetrip oder Familienreise – hier sehen Sie, worauf ich mich spezialisiert habe.'
                currentLabel='Meine Expertise'
                image='/images/expertise/travel.jpeg'
            />

            {/* INTRO */}
            <section className='bg-cream py-16 sm:py-24'>
                <Container>
                    <div className='grid gap-8 lg:grid-cols-2 lg:items-end'>
                        <div>
                            <p className='inline-flex items-center gap-2 rounded-full bg-coral/10 px-4 py-1.5 font-display text-sm font-semibold text-coral-deep'>
                                <span className='h-2 w-2 rounded-full bg-coral' />
                                Reiseexpertise
                            </p>
                            <h2 className='mt-5 max-w-2xl font-display text-3xl font-semibold leading-[1.05] text-balance text-forest sm:text-4xl'>
                                Reisen, die zu Ihnen passen.
                            </h2>
                        </div>

                        <p className='max-w-xl font-sans text-lg leading-8 text-ink/70 lg:ml-auto'>
                            Jede Reise ist anders. Deshalb plane ich Reisen
                            individuell und mit viel Liebe zum Detail –
                            abgestimmt auf Ihre Wünsche, Vorstellungen und
                            Bedürfnisse.
                        </p>
                    </div>
                </Container>
            </section>

            {/* DESTINATION-STYLE CARDS */}
            <section className='bg-cream pb-20 sm:pb-28'>
                <Container>
                    <div className='mx-auto grid max-w-7xl grid-cols-4 gap-6'>
                        {expertiseItems.map((item, index) => (
                            <div
                                key={item.title}
                                className={`group relative aspect-[3/4] overflow-hidden rounded-[2rem] shadow-lg ${offsets[index % offsets.length]}`}
                            >
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    sizes='(min-width: 640px) 25vw, 45vw'
                                    className='object-cover transition-transform duration-500 group-hover:scale-105'
                                />
                                <div
                                    className={`absolute inset-0 bg-gradient-to-b ${tints[index % tints.length]}`}
                                />

                                <p className='absolute left-5 top-5 font-display text-xs font-bold uppercase tracking-widest text-white/80'>
                                    Spezialgebiet
                                </p>

                                <h3 className='absolute inset-x-5 bottom-6 font-display text-2xl font-semibold leading-tight text-white'>
                                    {item.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* PERSONAL APPROACH */}
            <section className='bg-forest py-20 sm:py-28'>
                <Container>
                    <div className='grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center'>
                        <div>
                            <div className='mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-butter'>
                                <Compass
                                    className='h-5 w-5 text-ink'
                                    aria-hidden='true'
                                />
                            </div>

                            <p className='font-display text-sm font-bold uppercase tracking-wider text-butter'>
                                Persönliche Beratung
                            </p>

                            <h2 className='mt-3 font-display text-3xl font-semibold leading-[1.05] text-balance text-white sm:text-4xl'>
                                Nicht jede Reise muss in eine Kategorie passen.
                            </h2>
                        </div>

                        <p className='max-w-2xl font-sans text-lg leading-8 text-white/75'>
                            Vielleicht haben Sie bereits eine ganz bestimmte
                            Vorstellung oder möchten sich einfach inspirieren
                            lassen. Gemeinsam finden wir heraus, welche Art von
                            Reise am besten zu Ihnen passt.
                        </p>
                    </div>
                </Container>
            </section>

            <CtaBand dividerFrom='bg-forest' />
        </>
    );
}
