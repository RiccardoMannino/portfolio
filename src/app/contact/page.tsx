import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contattami - Riccardo Mannino',
  description:
    'Contattami per collaborazioni, preventivi o richieste. Sarò felice di rispondere al più presto!',
  keywords: ['Contatti', 'Contattami', 'Riccardo Mannino', 'collaborazione'],
  openGraph: {
    title: 'Contattami - Riccardo Mannino',
    description:
      'Compila il form per metterti in contatto con Riccardo Mannino.',
    url: 'https://www.riccardomannino.it/contact',
    siteName: 'Riccardo Mannino Portfolio',
    type: 'profile',
    images: [
      {
        url: '/og/contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contattami - Riccardo Mannino',
      },
    ],
  },
}

export default function Contact() {
  return (
    <Container type="section" className="py-24">
      <ContactForm />
    </Container>
  )
}
