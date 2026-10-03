import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { siteConfig } from "@/data/site-config";

const rows = [
    { icon: Phone, href: `tel:${siteConfig.phone}`, value: siteConfig.phone },
    { icon: Mail, href: `mailto:${siteConfig.email}`, value: siteConfig.email },
    {
        icon: MapPin,
        href: undefined,
        value: `${siteConfig.address.street}, ${siteConfig.address.postalCode} ${siteConfig.address.city}`,
    },
];

export default function ContactInfo() {
    return (
        <div className='space-y-5'>
            {rows.map(({ icon: Icon, href, value }) => {
                const content = (
                    <div className='flex items-center gap-3.5'>
                        <span className='flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10'>
                            <Icon
                                className='h-4.5 w-4.5 text-butter'
                                aria-hidden='true'
                            />
                        </span>
                        <span className='font-sans text-white/90'>{value}</span>
                    </div>
                );
                return href ? (
                    <a
                        key={value}
                        href={href}
                        className='block hover:opacity-80'
                    >
                        {content}
                    </a>
                ) : (
                    <div key={value}>{content}</div>
                );
            })}

            <div className='flex gap-3 pt-2'>
                <a
                    href={siteConfig.instagramUrl}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Instagram'
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20'
                >
                    <FaInstagram
                        className='h-4.5 w-4.5 text-white'
                        aria-hidden='true'
                    />
                </a>
                <a
                    href={`https://wa.me/${siteConfig.whatsappNumber}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='WhatsApp'
                    className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-white/20'
                >
                    <FaWhatsapp
                        className='h-4.5 w-4.5 text-white'
                        aria-hidden='true'
                    />
                </a>
            </div>
        </div>
    );
}
