'use client'

import { useEffect, useState } from 'react'
import { getCalApi } from '@calcom/embed-react'
import emailjs from '@emailjs/browser'
import { Field, FieldValues, useForm } from 'react-hook-form'
import toast from 'react-hot-toast'

export default function Contact() {
  const [IsSending, setIsSending] = useState(false)

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const formValue = watch()

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

  const sendEmail = async (data: FieldValues) => {
    try {
      setIsSending(true)
      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string,
      )
      console.log(result)

      toast.custom((t) => (
        <div
          className={`rounded-full bg-[#111827] px-6 py-4 text-white shadow-md ${
            t.visible ? 'animate-enter' : 'animate-leave'
          }`}
        >
          Messaggio inviato con successo ✅
        </div>
      ))
    } catch (error) {
      console.error(error)
      toast.custom((t) => (
        <div
          className={`font-white rounded-full bg-[#111827] px-6 py-4 text-white shadow-md ${
            t.visible ? 'animate-enter' : 'animate-leave'
          }`}
        >
          Errore nell&apos; invio del messaggio ⛔
        </div>
      ))
    } finally {
      setIsSending(false)
      reset()
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

      <form onSubmit={handleSubmit(sendEmail)}>
        <div
          className={`sm:grid-auto-rows-min mt-7 flex flex-col gap-2 sm:grid sm:grid-cols-2`}
        >
          <div className="w-full">
            <input
              disabled={IsSending}
              type="text"
              placeholder="Nome e Cognome"
              {...register('name', {
                required: true,
                maxLength: 50,
                pattern: /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ']+\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ']+$/,
              })}
              className={` ${(errors.name && 'border-red-500 bg-red-100 focus:outline-none focus:ring focus:ring-red-300') || 'bg-neutral-100'} w-full rounded-xl border bg-neutral-100 px-2 py-2 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 md:text-base lg:text-lg`}
            />
            {errors.name && (
              <p className="mb-2 grid pt-1 text-sm text-red-500 md:text-base lg:text-lg">
                Nome o cognome non validi
              </p>
            )}
          </div>

          <div className="w-full">
            <input
              disabled={IsSending}
              type="email"
              placeholder="Email"
              {...register('email', {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
              className={`w-full rounded-xl border bg-neutral-100 px-2 py-2 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 valid:focus:ring md:text-base lg:text-lg ${(errors.email && 'border-red-500 bg-red-100') || 'bg-neutral-100'}`}
            />
            {errors.email && (
              <p className="mb-5 pt-1 text-sm text-red-500 md:text-base lg:text-lg">
                Email non valida
              </p>
            )}
          </div>

          <div className="col-span-2 w-full">
            <textarea
              disabled={IsSending}
              className={`w-full rounded-xl border bg-neutral-100 pt-3 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-gray-300 md:text-base lg:text-lg ${(errors.message && 'border-red-500 bg-red-100') || 'bg-neutral-100'}`}
              rows={10}
              placeholder="Inserisci il tuo messaggio"
              {...register('message', {
                required: true,
                minLength: 50,
                maxLength: 250,
              })}
            />
            <p className="mt-2">
              Caratteri inviati: {formValue.message?.length || 0}
            </p>
            {errors.message && (
              <p className="mb-2 text-sm text-red-500 md:text-base lg:text-lg">
                Inserisci un messaggio di almeno 50 caratteri
              </p>
            )}
          </div>
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
