import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "outline" | "light" | "outlineLight";

const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-[0.95rem] font-semibold transition-all hover:-translate-y-0.5 active:translate-y-0";

const variants: Record<Variant, string> = {
    primary: "bg-coral text-white shadow-[0_6px_0_0_var(--color-coral-deep)] hover:shadow-[0_4px_0_0_var(--color-coral-deep)]",
    secondary:
        "bg-butter text-ink shadow-[0_6px_0_0_#d19a2b] hover:shadow-[0_4px_0_0_#d19a2b]",
    outline: "border-2 border-forest text-forest hover:bg-forest hover:text-white",
    light: "bg-white text-forest shadow-md hover:bg-cream",
    outlineLight:
        "border-2 border-white/70 text-white hover:border-white hover:bg-white/10",
};

export default function Button({
    href,
    variant = "primary",
    className,
    children,
}: {
    href: string;
    variant?: Variant;
    className?: string;
    children: ReactNode;
}) {
    return (
        <Link
            href={href}
            className={cn(base, variants[variant], className)}
        >
            {children}
        </Link>
    );
}
