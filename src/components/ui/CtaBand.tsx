import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import WaveDivider from "@/components/ui/WaveDivider";

/**
 * Closing call to action shared by the About, Expertise and Reports pages.
 * `dividerFrom` should match the background of whichever section comes
 * right before this one (bg-cream by default; pass "bg-forest" when the
 * page's previous section is already forest, so the seam stays invisible).
 */
export default function CtaBand({
    dividerFrom = "bg-cream",
}: {
    dividerFrom?: string;
}) {
    return (
        <>
            <WaveDivider
                bg={dividerFrom}
                fill='text-forest'
            />
            <section className='bg-cream text-forest'>
                <Container className='grid gap-8 py-20 sm:py-28 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16'>
                    <h2 className='font-display text-4xl font-semibold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl'>
                        Ihr Traumziel ist noch nicht dabei?
                    </h2>
                    <div>
                        <p className='max-w-md font-sans text-lg leading-relaxed text-forest/75'>
                            Schreiben Sie mir, und wir planen gemeinsam Ihre
                            nächste Reise.
                        </p>
                        <Button
                            href='/kontakt'
                            variant='secondary'
                            className='mt-7'
                        >
                            Kontakt aufnehmen
                        </Button>
                    </div>
                </Container>
            </section>
        </>
    );
}
