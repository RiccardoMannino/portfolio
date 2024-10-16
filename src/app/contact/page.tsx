'use client'

import { useEffect, useState } from 'react'
import { getCalApi } from '@calcom/embed-react'
import emailjs from '@emailjs/browser'

import toast from 'react-hot-toast'

export default function Contact() {
  const [IsSending, setIsSending] = useState(false)

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
    async function prenotation() {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', {
        theme: 'light',
        hideEventTypeDetails: false,
        layout: 'month_view',
      })
    }
    prenotation()
  }, [])

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      setIsSending(true)
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        e.target as HTMLFormElement,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      console.log(result)
      toast.success('Messaggio inviato con successo')
    } catch (error) {
      console.error(error)
      toast.error("Errore nell'invio del messaggio.")
    } finally {
      setIsSending(false),
        setFormData({
          name: '',
          email: '',
          message: '',
        })
    }
  }

  return (
    <>
      <h1 className="mb-4 font-bold md:text-3xl">
        Contattami <span>✉️</span>
      </h1>
      <p className="mb-2 text-sm text-neutral-500 md:text-base lg:text-lg">
        Compila il Form sottostante e ti risponderò il prima possibile oppure
        prenota una chiamata.
      </p>

      <form onSubmit={sendEmail}>
        <div className="mt-7 flex flex-col gap-5 sm:grid sm:grid-cols-2 sm:grid-rows-[40px]">
          <input
            disabled={IsSending}
            type="text"
            placeholder="Nome"
            name="name"
            value={formData.name}
            required
            onChange={handleChange}
            className="rounded-xl border bg-neutral-100 px-2 py-2 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 md:text-base lg:text-lg"
          />
          <input
            disabled={IsSending}
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            required
            onChange={handleChange}
            className="rounded-xl border bg-neutral-100 px-2 py-2 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 md:text-base lg:text-lg"
          />

          <textarea
            disabled={IsSending}
            className="col-span-2 rounded-xl border bg-neutral-100 pt-3 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 md:text-base lg:text-lg"
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
            disabled={IsSending}
            className="focus: w-full rounded-full border-gray-700 bg-neutral-100 px-4 py-2 text-sm font-semibold text-neutral-500 focus:outline-none focus:ring focus:ring-gray-300 active:outline-none active:ring active:ring-gray-300 md:text-base lg:text-lg"
            type="submit"
          >
            Invia Form!
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
