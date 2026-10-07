import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import Container from '@/components/ui/Container'
import WaveDivider from '@/components/ui/WaveDivider'
import { footerLinks, navigation } from '@/data/navigation'
import { siteConfig } from '@/data/site-config'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className='bg-forest-deep text-white'>
      <WaveDivider bg='bg-cream' fill='text-forest-deep' />
      <Container className='grid gap-12 pb-16 pt-2 sm:pb-20 lg:grid-cols-[1fr_1fr_1fr]'>
        <div>
          <div className='flex h-14 w-14 items-center justify-center rounded-full bg-white p-2'>
            <Image
              src='/logo.png'
              alt={siteConfig.name}
              width={150}
              height={164}
              className='h-auto w-full object-contain'
            />
          </div>
          <p className='mt-5 max-w-xs font-sans text-white/65'>{siteConfig.description}</p>
          <div className='mt-5 flex gap-3'>
            <a
              href={siteConfig.instagramUrl}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-coral'
            >
              <FaInstagram className='h-5 w-5' />
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsappNumber}`}
              target='_blank'
              rel='noopener noreferrer'
              aria-label='WhatsApp'
              className='flex h-10 w-10 items-center justify-center rounded-full bg-white/10 hover:bg-coral'
            >
              <FaWhatsapp className='h-5 w-5' />
            </a>
          </div>
        </div>

        <div>
          <p className='font-display text-sm font-semibold uppercase tracking-wider text-butter'>
            Navigation
          </p>
          <nav className='mt-4 flex flex-col gap-2.5'>
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className='font-sans text-white/75 hover:text-white'>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div>
          <p className='font-display text-sm font-semibold uppercase tracking-wider text-butter'>Kontakt</p>
          <div className='mt-4 flex flex-col gap-2.5 font-sans text-white/75'>
            <a href={`tel:${siteConfig.phone}`} className='hover:text-white'>
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className='hover:text-white'>
              {siteConfig.email}
            </a>
            <p>
              {siteConfig.address.street}
              <br />
              {siteConfig.address.postalCode} {siteConfig.address.city}
            </p>
          </div>
        </div>
      </Container>

      <div className='border-t border-white/10'>
        <Container className='flex flex-col items-center justify-between gap-3 py-6 font-sans text-sm text-white/55 sm:flex-row'>
          <p>
            © {year} {siteConfig.name}. Alle Rechte vorbehalten.
          </p>
          <nav aria-label='Legal' className='flex gap-6'>
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className='hover:text-white'>
                {link.label}
              </Link>
            ))}
          </nav>
        </Container>
      </div>
    </footer>
  )
}
