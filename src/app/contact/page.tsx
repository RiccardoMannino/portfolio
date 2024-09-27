'use client'
import React, { useState } from 'react'
import { getCalApi } from '@calcom/embed-react'
import { useEffect } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  useEffect(() => {
    ;(async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    })()
  }, [])

  //TODO : sistemare template dal sito Email.js
  //TODO : creare toast a mano;
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      console.log(result.text)
      alert('Messaggio inviato con successo!')
    } catch (error) {
      console.error("Errore nell'invio del messaggio:", error)
      alert("Errore nell'invio del messaggio.")
    }
  }

  return (
    <>
      <h1 className="mb-4 text-3xl font-bold">
        Contattami <span>✉️</span>
      </h1>
      <p className="text-neutral-500">
        Compila il Form sottostante e cercherò di risponderti il prima possibile
        oppure prenota una chiamata.
      </p>
      <form onSubmit={sendEmail}>
        <div className="mt-6 grid grid-cols-2 grid-rows-[40px] gap-5">
          <input
            type="text"
            placeholder="Nome"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            className="rounded-xl border bg-neutral-100 indent-3 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="rounded-xl border bg-neutral-100 indent-3 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
          />

          <textarea
            className="col-span-2 rounded-xl border bg-neutral-100 pt-3 indent-3 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300"
            rows={10}
            placeholder="Inserisci il tuo messaggio"
            required
            onChange={handleChange}
            name="message"
            value={formData.message}
            maxLength={250}
          />
        </div>
        <div className="mt-10 flex w-full justify-end">
          <button
            className="focus: w-full rounded-full border-gray-700 bg-neutral-100 px-4 py-2 font-semibold focus:outline-none focus:ring focus:ring-gray-300 active:outline-none active:ring active:ring-gray-300"
            type="submit"
          >
            Invia!
          </button>
        </div>
      </form>

      <div className="mt-7">
        <button
          className="bold rounded-full bg-gray-900 px-3 py-3 text-xs font-semibold text-white"
          data-cal-namespace="30min"
          data-cal-link="riccardo-mannino-mogao4/30min"
          data-cal-config='{"layout":"month_view"}'
        >
          Prenota chiamata
        </button>
      </div>
    </>
  )
}
