'use server'

import { createClient } from '@/utils/supabase/server'
import { revalidatePath } from 'next/cache'

export async function addReview(formData: FormData) {
  const supabase = await createClient()

  // 1. Controlla se l'utente è realmente autenticato
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    throw new Error('Devi essere autenticato per lasciare una recensione.')
  }

  // 2. Estrai e converti i dati inviati dal Form HTML
  const ratingInput = formData.get('rating')
  const commentInput = formData.get('comment')
  const userName = formData.get('persona')
  const avatarUrl = user?.user_metadata?.avatar_url || ''

  const rating = Number(ratingInput)
  const comment = String(commentInput).trim()
  const persona = String(userName ?? '').trim()

  // 3. Validazione minima dei dati di input
  if (!rating || rating < 1 || rating > 5) {
    throw new Error('Il voto deve essere compreso tra 1 e 5 stelle.')
  }

  if (!comment || comment.length < 3) {
    throw new Error('Il commento deve essere lungo almeno 3 caratteri.')
  }

  if (!persona) {
    throw new Error("Il nome dell'utente è obbligatorio.")
  }

  const { data: existingReview, error: reviewCheckError } = await supabase
    .from('recensioni')
    .select('id')
    .eq('user_id', user.id)
    .maybeSingle()

  if (reviewCheckError) {
    throw new Error('Errore durante il controllo delle recensioni esistenti.')
  }

  if (existingReview) {
    throw new Error('Hai già lasciato una recensione.')
  }

  // 4. Inserisci i dati nel database SQL
  // Nota: user_id si popolerà da solo grazie al default auth.uid() che hai impostato!
  const { error: dbError } = await supabase.from('recensioni').insert([
    {
      rating: rating,
      comment: comment,
      persona: persona,
      avatar_url: avatarUrl,
    },
  ])

  if (dbError) {
    throw new Error('Errore durante il salvataggio della recensione.')
  }

  // 5. Svuota la cache di Next.js per mostrare subito la nuova recensione
  revalidatePath('/')
}
