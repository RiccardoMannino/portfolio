'use client'
import Link from 'next/link'

import { ReactNode, useEffect, useRef, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import { getCalApi } from '@calcom/embed-react'
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconMapPin,
} from '@tabler/icons-react'
import toast, { Toast } from 'react-hot-toast'
import emailjs from '@emailjs/browser'
import Button from './Button'

type Pagine = {
  pagina: string
  href: string
  image?: ReactNode
}

type ConfigData = {
  callLink: string
  emailJsPublicKey: string
  emailJsServiceId: string
  emailJsTemplateId: string
}
const social: Pagine[] = [
  {
    pagina: 'Linkedin',
    href: 'https://www.linkedin.com/in/riccardo-mannino/',
    image: <IconBrandLinkedin size={25} />,
  },
  {
    pagina: 'Github',
    href: 'https://github.com/RiccardoMannino/',
    image: <IconBrandGithub size={25} />,
  },
]

export default function ContactForm() {
  const [IsSending, setIsSending] = useState(false)

  const form = useRef(null)

  // Funzione per inviare l'email
  const sendEmail = async (data: FieldValues) => {
    try {
      setIsSending(true)
      // recupero chiavi dal file .env
      const response = await fetch('/api/config')

      if (!response.ok) {
        throw new Error('Impossibile recuperare la configurazione')
      }

      const config: ConfigData = await response.json()

      //input dei campi del form
      const formData = {
        name: data.name,
        email: data.email,
        message: data.message,
      }

      // invio della mail
      await emailjs.send(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        formData,
        config.emailJsPublicKey,
      )
      //Toast in caso di invio o errore
      toast.custom((t: Toast) => (
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
      toast.custom((t: Toast) => (
        <div
          className={`font-white rounded-full bg-[#111827] px-6 py-4 text-white shadow-md ${
            t.visible ? 'animate-enter' : 'animate-leave'
          }`}
        >
          Errore nell&apos;invio del messaggio ⛔
        </div>
      ))
    } finally {
      setIsSending(false)
      reset()
    }
  }

  // Hook di react-use form
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm()

  const formValue = watch()

  return (
    <>
      <h1 className="mb-4 text-center text-3xl font-bold text-emerald-500 md:text-4xl">
        Contattami <span>✉️</span>
      </h1>
      <p className="phone:text-center mb-2 text-center text-lg text-neutral-500">
        Compila il Form sottostante e ti risponderò il prima possibile.
      </p>

      <div className="phone:flex-col flex gap-10">
        <div>
          <div className="mt-8 flex items-center gap-2">
            <div className="rounded-lg bg-emerald-500 p-4 text-neutral-50">
              {<IconMail />}
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-neutral-500">Email</p>
              <a
                className="text-lg font-semibold text-emerald-400"
                href="mailto:manninoriccardo3@gmail.com"
              >
                manninoriccardo3@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <div className="rounded-lg bg-emerald-500 p-4 text-neutral-50">
              {<IconMapPin />}
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-neutral-500">Location</p>
              <p className="font-semibold text-emerald-400">Palermo, IT</p>
            </div>
          </div>

          <div className="mt-8 flex gap-1">
            {social.map((so) => (
              <Button
                key={so.href}
                className="flex transform items-center rounded-lg bg-emerald-500 font-medium text-neutral-50 delay-75 duration-100 ease-in hover:cursor-pointer hover:text-neutral-700"
                type="button"
              >
                <Link
                  href={so.href}
                  target="_blank"
                  className="flex items-center stroke-neutral-50 p-[3px] text-lg font-semibold"
                >
                  {so.image}
                  {so.pagina}
                </Link>
              </Button>
            ))}
          </div>
        </div>

        <div>
          <form ref={form} onSubmit={handleSubmit(sendEmail)}>
            <div
              className={`sm:grid-auto-rows-min mt-7 flex flex-col gap-4 sm:grid sm:grid-cols-2`}
            >
              <div className="w-full">
                <input
                  disabled={IsSending}
                  type="text"
                  placeholder="Nome e Cognome"
                  {...register('name', {
                    required: true,
                    maxLength: 50,
                    pattern: /^[A-Za-zÀ-ÿ]+(?: [A-Za-zÀ-ÿ]+)*$/,
                  })}
                  className={` ${(errors.name && 'border-red-500 bg-red-100 focus:ring-3 focus:ring-red-300 focus:outline-hidden') || 'bg-neutral-100 focus:ring-emerald-200'} w-full rounded-xl border bg-neutral-100 p-3 indent-2 text-lg text-neutral-500 focus:ring-3 focus:outline-hidden`}
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
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                  className={` ${(errors.email && 'border-red-500 bg-red-100 focus:ring-3 focus:ring-red-300 focus:outline-hidden') || 'bg-neutral-100 focus:ring-emerald-200'} w-full rounded-xl border bg-neutral-100 p-3 indent-2 text-lg text-neutral-500 focus:ring-3 focus:outline-hidden`}
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
                  className={` ${(errors.message && 'border-red-500 bg-red-100 focus:ring-3 focus:ring-red-300 focus:outline-hidden') || 'bg-neutral-100 focus:ring-emerald-200'} w-full rounded-xl border bg-neutral-100 p-3 indent-2 text-lg text-neutral-500 focus:ring-3 focus:outline-hidden`}
                  rows={10}
                  maxLength={250}
                  placeholder="Inserisci il tuo messaggio"
                  {...register('message', {
                    required: true,
                    minLength: 50,
                    maxLength: 250,
                  })}
                />
                <p className="mt-2 text-lg text-neutral-500">
                  Caratteri Digitati: {formValue.message?.length || 0} / 250
                </p>
                {errors.message && (
                  <p className="mb-2 text-sm text-red-500 md:text-base lg:text-lg">
                    Inserisci un messaggio di almeno 50
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10 flex w-full justify-end">
              <button
                disabled={IsSending}
                className="w-full cursor-pointer rounded-full border-gray-700 bg-emerald-500 px-4 py-2 text-lg font-semibold text-neutral-50 focus:ring-3 focus:ring-gray-300 focus:outline-hidden active:ring-3 active:ring-gray-300 active:outline-hidden"
                type="submit"
              >
                {IsSending ? 'Invio in corso...' : 'Invia Messaggio'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
