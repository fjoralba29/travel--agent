import Container from "@/components/ui/Container";

export default function NotFound() {
    return (
        <section className='-mt-24 bg-forest py-40 pt-32 text-white lg:-mt-28'>
            <Container>
                <p className='inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 font-display text-sm font-semibold text-butter'>
                    <span className='h-2 w-2 rounded-full bg-butter' />
                    404
                </p>
                <h1 className='mt-5 font-display text-5xl font-semibold tracking-tight sm:text-7xl'>
                    Seite nicht gefunden
                </h1>
            </Container>
        </section>
    );
}
