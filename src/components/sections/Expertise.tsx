import Image from "next/image";
import Container from "@/components/ui/Container";
import { expertiseItems } from "@/data/expertise";

const rotations = [
    "lg:-rotate-6",
    "lg:rotate-3",
    "lg:-rotate-3",
    "lg:rotate-6",
];

export default function Expertise() {
    return (
        <section
            id='meine-expertise'
            className='bg-forest py-20 sm:py-28'
        >
            <Container>
                <div className='mx-auto max-w-xl text-center'>
                    <p className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm font-semibold text-butter'>
                        <span className='h-2 w-2 rounded-full bg-butter' />
                        Meine Spezialgebiete
                    </p>
                    <h2 className='mt-4 font-display text-4xl font-semibold leading-[1.05] text-balance text-white sm:text-5xl'>
                        Deine Reise, perfekt geplant – mit Herz &amp; Know-how
                    </h2>
                </div>

                <div className='mt-16 flex flex-wrap justify-center gap-6 lg:flex-nowrap lg:gap-0'>
                    {expertiseItems.map((item, index) => (
                        <div
                            key={item.title}
                            className={`group relative z-10 aspect-[3/4] w-40 shrink-0 overflow-hidden rounded-[1.5rem] shadow-xl ring-4 ring-forest transition-all duration-300 hover:z-30 hover:-translate-y-3 hover:scale-105 hover:rotate-0 sm:w-48 lg:-ml-10 lg:w-52 lg:first:ml-0 ${rotations[index % rotations.length]} hover:!z-30`}
                            style={{ zIndex: index + 1 }}
                        >
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                sizes='(min-width: 1024px) 208px, 45vw'
                                className='object-cover'
                            />
                            <div className='absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent' />

                            <span className='absolute inset-x-0 bottom-0 p-4 font-display text-sm font-semibold leading-tight text-white'>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
