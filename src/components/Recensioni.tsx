'use client'
import { useState } from 'react'
import { InfiniteMovingCards } from '../components/infinite-moving-cards'
import { LoginButton, LogOut } from './LoginOutButton' // Aggiusta il percorso del file
import ReviewForm from './ReviewForm' // Aggiusta il percorso del file
import Button from './Button'

type RealReview = {
  id: string
  created_at: string
  rating: number
  comment: string
  user_id: string
  user_name?: string
  user_email?: string
}

type RecensioniProps = {
  reviews: RealReview[]
  user: any // Riceve lo stato dell'utente dal Server Component
}

export function Recensioni({ reviews, user }: RecensioniProps) {
  const [recensioni, setRecensioni] = useState<boolean>(false)
  const hasReviews = reviews && reviews.length > 0
  const hasAlreadyReviewed = Boolean(
    user && reviews.some((review) => review.user_id === user.id),
  )

  return (
    <div className="relative flex min-h-160 flex-col items-center justify-center gap-8 overflow-hidden rounded-md py-12 antialiased">
      {/* 1. Titolo della sezione */}
      <h1 className="text-foreground text-center text-[clamp(1.5rem,4vw,2.25rem)] font-bold">
        Recensioni
      </h1>

      {/* 2. Blocco di Azione Intermedio (Sotto il titolo, sopra il carosello) */}
      <div className="z-30 flex w-full max-w-md flex-col items-center gap-3 px-4">
        {user ? (
          <div className="flex w-full flex-col items-center gap-2">
            <p className="text-foreground mb-2">
              Autenticato come{' '}
              <strong className="text-foreground">{user.email}</strong>
            </p>
            {hasAlreadyReviewed ? (
              <>
                <p className="text-foreground opacity-70">
                  Hai già lasciato una recensione.
                </p>
                <LogOut />
              </>
            ) : (
              <>
                {!recensioni && (
                  <Button
                    className="shadow-foreground bg-primary rounded-full border-2 border-black p-2 text-base font-semibold text-black shadow hover:cursor-pointer"
                    onClick={() => setRecensioni(!recensioni)}
                  >
                    Aggiungi recensione
                  </Button>
                )}
                <span className="text-foreground text-base">Oppure</span>
                <LogOut />
                {recensioni && (
                  <ReviewForm closeForm={() => setRecensioni(!recensioni)} />
                )}
              </>
            )}
          </div>
        ) : (
          <div className="bg-background/50 border-foreground shadow-foreground flex w-full flex-col items-center gap-3 rounded-2xl border-2 p-6 text-center shadow">
            <p className="text-foreground text-base">
              {hasReviews
                ? 'Vuoi lasciare una recensione? Accedi con Google'
                : 'Non ci sono ancora recensioni. Accedi per lasciare la prima!'}
            </p>
            <LoginButton />
          </div>
        )}
      </div>

      {/* 3. Il Carosello delle Testimonianze (In fondo) */}
      {hasReviews && (
        <InfiniteMovingCards
          items={reviews}
          direction="right"
          speed="slow"
          className="mt-4"
        />
      )}
    </div>
  )
}
