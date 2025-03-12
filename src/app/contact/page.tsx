import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'
import { Metadata } from 'next'

export const metadata: Metadata = {
  description: 'Contattami compilando il form',
  openGraph: {
    title: 'Riccardo Mannino | Contatti',
    description: 'Contattami compilando il form',
  },
}

export function Contact() {
  return (
    <Container type="section" className="py-24">
      <ContactForm />
    </Container>
  )
}
