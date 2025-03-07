import ContactForm from '@/components/ContactForm'
import Container from '@/components/Container'

export default function Contact() {
  return (
    <Container type="section" className="py-24">
      <ContactForm call={true} />
    </Container>
  )
}
