import { NextResponse } from 'next/server'
import { createClient } from '@/utils/supabase/server'

export async function GET(request: Request) {
  // 1. Estrai l'URL della richiesta e il codice temporaneo inviato da Google
  const requestUrl = new URL(request.url)
  const code = requestUrl.searchParams.get('code')
  const next = requestUrl.searchParams.get('next') ?? '/'

  // 2. Se Google ci ha restituito un codice, scambialo con una sessione reale
  if (code) {
    const supabase = await createClient()

    // Questo metodo scambia il codice temporaneo con i cookie di sessione definitivi nel browser
    const { error } = await supabase.auth.exchangeCodeForSession(code)

    if (!error) {
      // Login completato con successo! Rimanda l'utente al tuo portfolio
      return NextResponse.redirect(`${requestUrl.origin}${next}`)
    }
  }

  // Se qualcosa va storto (es. codice scaduto), rimanda l'utente alla home
  return NextResponse.redirect(`${requestUrl.origin}/`)
}
