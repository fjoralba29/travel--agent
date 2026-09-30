"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { navigation } from "@/data/navigation";

export default function MobileMenu({
    open,
    onOpenChange,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}) {
    return (
        <div className='lg:hidden'>
            <button
                type='button'
                onClick={() => onOpenChange(!open)}
                aria-expanded={open}
                aria-controls='mobile-menu'
                aria-label={open ? "Close menu" : "Open menu"}
                className='inline-flex h-11 w-11 items-center justify-center rounded-full text-forest hover:bg-forest/5'
            >
                {open ? (
                    <X className='h-6 w-6' />
                ) : (
                    <Menu className='h-6 w-6' />
                )}
            </button>

            {open && (
                <div
                    id='mobile-menu'
                    className='absolute inset-x-4 top-[4.5rem] rounded-3xl bg-white p-5 shadow-2xl'
                >
                    <nav
                        aria-label='Mobile navigation'
                        className='flex flex-col'
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => onOpenChange(false)}
                                className='rounded-xl px-3 py-3 font-display text-lg font-semibold text-forest hover:bg-forest/5'
                            >
                                {item.label}
                            </Link>
                        ))}
                        <WhatsAppButton className='mt-3 justify-center' />
                    </nav>
                </div>
            )}
        </div>
    );
}
