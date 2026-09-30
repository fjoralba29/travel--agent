/**
 * Structured bio layout: a larger lead paragraph, the middle paragraphs
 * as a divided list (thin rule between each), and the closing paragraph
 * pulled out as a quote. Everything renders at once — no expand/collapse.
 */
export default function AboutDescription({
    paragraphs,
}: {
    paragraphs: string[];
}) {
    if (paragraphs.length === 0) return null;

    const [lead, ...rest] = paragraphs;
    const quote = rest.length > 0 ? rest[rest.length - 1] : null;
    const middle = quote ? rest.slice(0, -1) : rest;

    return (
        <div>
            <p className='font-sans text-xl leading-relaxed text-ink/85'>
                {lead}
            </p>

            {middle.length > 0 && (
                <div className='mt-6 divide-y divide-forest/10 border-t border-forest/10'>
                    {middle.map((paragraph, index) => (
                        <p
                            key={index}
                            className='py-5 font-sans text-base leading-relaxed text-ink/70'
                        >
                            {paragraph}
                        </p>
                    ))}
                </div>
            )}
        </div>
    );
}
