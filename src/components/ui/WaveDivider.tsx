import { cn } from "@/lib/utils";

export default function WaveDivider({
    bg,
    fill,
    className,
}: {
    bg: string;
    fill: string;
    className?: string;
}) {
    return (
        <div
            className={cn(
                "w-full overflow-hidden leading-none",
                bg,
                fill,
                className,
            )}
            aria-hidden='true'
        >
            <svg
                viewBox='0 0 1440 80'
                preserveAspectRatio='none'
                className='h-10 w-full sm:h-14'
            >
                <path
                    d='M0 40C240 90 480 0 720 20C960 40 1200 90 1440 40V80H0V40Z'
                    fill='currentColor'
                />
            </svg>
        </div>
    );
}
