// src/data/certificates.ts

export type Certificate = {
  title: string
  issuer: string
  date: string
  image: string
}

export const certificates: Certificate[] = [
  {
    title: 'Urlaubsprofi',
    issuer: 'CoralTravel / FerienTouristik, powered by Amondo',
    date: 'September 2026',
    image: '/images/certificates/certificate_1.png',
  },
  {
    title: 'Urlaubsprofi',
    issuer: 'Grecotel Hotels & Resorts, powered by Amondo',
    date: 'September 2026',
    image: '/images/certificates/certificate_2.png',
  },
  {
    title: 'Urlaubsprofi',
    issuer: 'Mein Sehiff TUI Cruises, powered by Amondo',
    date: 'Juli 2026',
    image: '/images/certificates/certificate_3.png',
  },
]
