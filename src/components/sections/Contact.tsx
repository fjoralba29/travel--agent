import { Plane } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactInfo from "@/components/sections/ContactInfo";
import ContactForm from "@/components/sections/ContactForm";

export default function Contact() {
    return (
        <section
            id='kontakt'
            className='bg-cream py-20 sm:py-28'
        >
            <Container>
                <div className='grid overflow-hidden rounded-[2.5rem] shadow-2xl lg:grid-cols-2'>
                    {/* Info panel */}
                    <div className='relative overflow-hidden bg-forest p-10 sm:p-14'>
                        <Plane
                            aria-hidden='true'
                            className='absolute -right-6 -top-6 h-32 w-32 rotate-45 text-white/5'
                        />
                        <p className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm font-semibold text-butter'>
                            <span className='h-2 w-2 rounded-full bg-butter' />
                            Kontakt
                        </p>
                        <h2 className='mt-5 font-display text-3xl font-semibold leading-[1.05] text-balance text-white sm:text-4xl'>
                            Urlaubsreif? Gleich bei mir melden!
                        </h2>
                        <p className='mt-4 max-w-sm font-sans text-white/70'>
                            Schreiben Sie mir, rufen Sie an, oder nutzen Sie
                            direkt das Formular — ich melde mich schnellstmöglich
                            bei Ihnen.
                        </p>

                        <div className='mt-10'>
                            <ContactInfo />
                        </div>
                    </div>

                    {/* Form panel */}
                    <div className='bg-white p-10 sm:p-14'>
                        <ContactForm />
                    </div>
                </div>
            </Container>
        </section>
    );
}
