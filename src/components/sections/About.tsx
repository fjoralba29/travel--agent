import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import AboutDescription from "@/components/ui/AboutDescription";
import { siteConfig } from "@/data/site-config";

export default function About() {
    return (
        <section
            id='uber-mich'
            className='py-20 sm:py-28'
        >
            <Container>
                <div className='grid items-center gap-14 lg:grid-cols-2 lg:gap-20'>
                    {/* Text */}
                    <div className='lg:order-1'>
                        <SectionHeading
                            eyebrow='Über mich'
                            title='Meine Geschichte'
                        />

                        <div className='mt-8'>
                            <AboutDescription
                                paragraphs={[
                                    "Ich bin Olesja – Albanerin, Wahl-Deutsche, Mutter von zwei wunderbaren Kindern und stolze Katzen- und Hundemama von Sussi, Saltzi und meinem Golden Retriever Onyx. Mein Leben ist eine bunte Mischung aus Familie, Reisen, internationalen Begegnungen und spannenden beruflichen Herausforderungen.",
                                    "Beruflich arbeite ich als IT Supplier Manager und bewege mich täglich zwischen Technologie, Verhandlungen und internationalen Partnerschaften. Privat schlägt mein Herz für das Reisen, gutes Essen, neue Kulturen und besondere Orte mit Geschichte.",
                                    "Meine Heimat Saranda an der albanischen Riviera hat einen ganz besonderen Platz in meinem Herzen. Gleichzeitig liebe ich es, die Welt zu entdecken, durch historische Altstädte zu schlendern, lokale Spezialitäten zu probieren und versteckte Orte abseits der bekannten Touristenpfade zu finden. Wer mich kennt, weiß: Über Orte, die ich liebe, könnte ich stundenlang sprechen.",
                                    "Auf diesem Blog teile ich persönliche Reiseerlebnisse, praktische Tipps und meine Lieblingsorte aus aller Welt. Dabei geht es mir nicht nur um Sehenswürdigkeiten, sondern vor allem um die Menschen, Geschichten und besonderen Momente, die eine Reise unvergesslich machen.",
                                    "Wenn ich nicht unterwegs bin, verbringe ich meine Zeit am liebsten mit meiner Familie, Sussi, Saltzi und Onyx. Sie erinnern mich jeden Tag daran, wie wichtig Neugier, Zusammenhalt und die Freude an den kleinen Dingen des Lebens sind.",
                                ]}
                            />
                        </div>

                        <a
                            href={siteConfig.linkedinUrl}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='mt-8 inline-flex items-center gap-2 font-display text-sm font-semibold text-forest hover:text-coral-deep'
                        >
                            <FaLinkedin
                                className='h-5 w-5'
                                aria-hidden='true'
                            />
                            Vernetzen Sie sich auf LinkedIn
                        </a>
                    </div>

                    {/* Quote + Photo */}
                    <div className='lg:order-2'>
                        <div className='relative mx-auto mt-8 aspect-[4/5] w-full max-w-md lg:mx-0 my-8 lg:ml-auto'>
                            <div className='blob-mask-alt absolute inset-0 overflow-hidden shadow-xl'>
                                <Image
                                    src='/images/hero/agent1.jpeg'
                                    alt={`Portrait of ${siteConfig.agentName}`}
                                    fill
                                    sizes='(min-width: 1024px) 400px, 90vw'
                                    className='object-cover'
                                />
                            </div>
                            <div className='absolute -bottom-5 -left-5 h-24 w-24 rounded-full bg-butter/70' />
                        </div>
                        <blockquote className='relative rounded-2xl bg-forest/5 py-6 pl-16 pr-6'>
                            <Quote
                                className='absolute left-5 top-5 h-8 w-8 text-coral/40'
                                aria-hidden='true'
                            />
                            <p className='font-display text-xl font-medium italic leading-snug text-forest'>
                                „Kurz gesagt: Ich liebe es, neue Erfahrungen zu
                                sammeln, die Welt mit offenen Augen zu entdecken
                                und meine Begeisterung für besondere Orte mit
                                anderen zu teilen. Jede Reise erzählt ihre
                                eigene Geschichte – und genau diese Geschichten
                                möchte ich weitergeben.“
                            </p>
                        </blockquote>
                    </div>
                </div>
            </Container>
        </section>
    );
}
