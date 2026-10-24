'use client'
import { addReview } from '../app/action'
import Button from './Button'

export default function ReviewForm({ closeForm }: { closeForm?: () => void }) {
  return (
    <form
      action={addReview}
      className="bg-background shadow-foreground border-foreground flex max-w-md flex-col gap-4 rounded-xl border-2 p-6 shadow-md"
    >
      <div className="flex items-center justify-between max-sm:gap-2">
        <h3 className="text-foreground text-lg font-bold">
          Lascia una recensione
        </h3>
        <Button
          className="bg-primary shadow-foreground p-2 py-0 text-base text-black hover:cursor-pointer max-sm:p-0 max-sm:text-sm"
          onClick={closeForm}
        >
          X
        </Button>
      </div>
      {/* Campo Nome Utente (opzionale) */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="persona"
          className="text-foreground text-sm font-medium"
        >
          Nome Utente
        </label>
        <input
          required
          type="text"
          id="persona"
          name="persona"
          minLength={1}
          placeholder="Il tuo nome"
          className="text-foreground border-foreground shadow-foreground w-full rounded-xl border-2 p-3 shadow-md transition focus:shadow-xs focus:outline-hidden"
        />
      </div>
      {/* Selezione del Voto */}
      <div className="flex flex-col gap-1">
        <label htmlFor="rating" className="text-foreground text-sm font-medium">
          Voto (da 1 a 5 stelle)
        </label>
        <select
          id="rating"
          name="rating"
          required
          className="text-foreground border-foreground shadow-foreground w-full rounded-xl border-2 p-3 shadow-md transition focus:shadow-xs focus:outline-hidden"
        >
          <option value="" disabled>
            Seleziona un voto
          </option>
          <option value="5">⭐⭐⭐⭐⭐ (5/5)</option>
          <option value="4">⭐⭐⭐⭐ (4/5)</option>
          <option value="3">⭐⭐⭐ (3/5)</option>
          <option value="2">⭐⭐ (2/5)</option>
          <option value="1">⭐ (1/5)</option>
        </select>
      </div>

      {/* Campo di Testo */}
      <div className="flex flex-col gap-1">
        <label
          htmlFor="comment"
          className="text-foreground text-sm font-medium"
        >
          Il tuo commento
        </label>
        <textarea
          id="comment"
          name="comment"
          required
          minLength={3}
          rows={4}
          placeholder="Scrivi qui cosa ne pensi del mio portfolio..."
          className="text-foreground border-foreground shadow-foreground w-full resize-none rounded-xl border-2 px-4 py-2 shadow-md transition focus:shadow-xs focus:outline-hidden"
        />
      </div>

      {/* Pulsante Invia */}
      <Button
        type="submit"
        className="shadow-foreground bg-primary rounded-full border-2 border-black p-2 text-base font-semibold text-black shadow hover:cursor-pointer"
      >
        Invia Recensione
      </Button>
    </form>
  )
}
