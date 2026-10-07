'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Container from '@/components/ui/Container'
import MobileMenu from '@/components/layout/MobileMenu'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { navigation } from '@/data/navigation'
import { siteConfig } from '@/data/site-config'
import { cn } from '@/lib/utils'

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className='sticky top-0 z-50 py-4'>
      <Container>
        <div
          className={cn(
            'flex items-center justify-between rounded-full bg-white/95 py-2 pl-2 pr-3 backdrop-blur transition-shadow sm:pr-4',
            scrolled || menuOpen ? 'shadow-xl' : 'shadow-[0_2px_20px_rgba(18,56,50,0.12)]',
          )}
        >
          <Link
            href='/'
            aria-label={siteConfig.name}
            className='flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-cream p-1.5'
          >
            <Image
              src='/logo.png'
              alt={siteConfig.name}
              width={150}
              height={164}
              priority
              className='h-auto max-h-full w-auto max-w-full object-contain'
            />
          </Link>

          <nav aria-label='Main navigation' className='hidden items-center gap-7 lg:flex'>
            {navigation.map((item) => {
              const active = item.href === '/' ? pathname === '/' : pathname?.startsWith(item.href)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    'rounded-full px-3.5 py-2 font-display text-[0.95rem] font-semibold transition-colors',
                    active ? 'bg-coral/10 text-coral-deep' : 'text-forest hover:bg-forest/5',
                  )}
                >
                  {item.label}
                </Link>
              )
            })}
          </nav>

          <div className='flex items-center gap-2'>
            <WhatsAppButton className='hidden lg:inline-flex' />
            <MobileMenu open={menuOpen} onOpenChange={setMenuOpen} />
          </div>
        </div>
      </Container>
    </header>
  )
}
