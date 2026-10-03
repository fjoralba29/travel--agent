import { cn } from "@/lib/utils";

export default function SectionHeading({
    eyebrow,
    title,
    className,
    tone = "light",
}: {
    eyebrow?: string;
    title: string;
    className?: string;
    tone?: "light" | "dark";
}) {
    const dark = tone === "dark";

    return (
        <div className={cn("max-w-3xl", className)}>
            {eyebrow && (
                <p
                    className={cn(
                        "inline-flex items-center gap-2 rounded-full px-4 py-1.5 font-display text-sm font-semibold",
                        dark
                            ? "bg-white/10 text-butter"
                            : "bg-coral/10 text-coral-deep",
                    )}
                >
                    <span
                        className={cn(
                            "h-2 w-2 rounded-full",
                            dark ? "bg-butter" : "bg-coral",
                        )}
                    />
                    {eyebrow}
                </p>
            )}
            <h2
                className={cn(
                    "mt-4 font-display text-4xl font-semibold leading-[1.08] tracking-tight text-balance sm:text-5xl",
                    dark ? "text-white" : "text-forest",
                )}
            >
                {title}
            </h2>
        </div>
    );
}
