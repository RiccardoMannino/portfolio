import ContactForm from '@/components/ContactForm'
import { ConfigData } from '@/components/ContactForm'

async function fetchConfig(): Promise<ConfigData> {
  const response = await fetch('/api/getConfig', {
    cache: 'no-store',
  })

  if (!response.ok) throw new Error('Errore nel recupero dei dati')

  const data = await response.json()

  return data
}

export default async function ConfigPage() {
  const config = await fetchConfig()
  // Ottieni la configurazione dal server

  return <ContactForm config={config} />
  // Non visualizzare nulla a schermo
}
