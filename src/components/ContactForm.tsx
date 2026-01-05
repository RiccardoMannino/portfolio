'use client'
import Link from 'next/link'

import { ReactNode, useRef, useState } from 'react'
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
      <h1 className="mb-4 text-center text-3xl font-bold md:text-4xl">
        Contattami <span>✉️</span>
      </h1>
      <p className="phone:text-center mb-2 text-center text-lg ">
        Compila il Form sottostante e ti risponderò il prima possibile.
      </p>

      <div className="phone:flex-col flex gap-10">
        <div>
          <div className="mt-8 flex items-center gap-2">
            <div className="rounded-lg bg-primary shadow-sm shadow-foreground p-4 text-foreground ">
              {<IconMail />}
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold ">Email</p>
              <a
                className="text-lg font-semibold text-foreground"
                href="mailto:manninoriccardo3@gmail.com"
              >
                manninoriccardo3@gmail.com
              </a>
            </div>
          </div>

          <div className="mt-8 flex items-center gap-2">
            <div className="rounded-lg bg-foreground shadow-sm shadow-primary p-4 text-neutral-50">
              {<IconMapPin />}
            </div>
            <div className="flex flex-col">
              <p className="text-lg font-semibold text-neutral-500">Location</p>
              <p className="font-semibold ">Palermo, IT</p>
            </div>
          </div>

          <div className="mt-8 flex gap-4">
            {social.map((so) => (
              <Button
                key={so.href}
                className="flex transform items-center last-of-type:hover:bg-foreground last-of-type:shadow-primary last-of-type:text-background last-of-type:bg-foreground  font-medium  delay-75 duration-100 ease-in hover:cursor-pointer "
                type="button"
              >
                <Link
                  href={so.href}
                  target="_blank"
                  className="flex items-center stroke-neutral-50 p-0.75 text-lg font-semibold"
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
                  className={`${errors.name && "border-destructive border-2 shadow-destructive shadow-md " || "border-foreground" } rounded-xl p-3 w-full border-2 shadow-md transition focus:outline-hidden focus:shadow-xs`}
                />
                {errors.name && (
                  <p className="mb-2 grid pt-1 text-sm error md:text-base lg:text-lg">
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
                   className={`${errors.email && "border-destructive border-2 shadow-destructive shadow-md " || "border-foreground" } rounded-xl p-3 w-full border-2 shadow-md transition focus:outline-hidden focus:shadow-xs`}
                />
                {errors.email && (
                  <p className="mb-5 pt-1 text-sm error md:text-base lg:text-lg">
                    Email non valida
                  </p>
                )}
              </div>

              <div className="col-span-2 w-full">
                <textarea
                  disabled={IsSending}
                  // className={` ${(errors.message && 'border-destructive bg-red-100 focus:ring-3 focus:ring-red-300 focus:outline-hidden') || 'bg-neutral-100 focus:ring-emerald-200'} w-full rounded-xl border bg-neutral-100 p-3 indent-2 text-lg  focus:ring-3 focus:outline-hidden`}
                  className={`${errors.message && "border-destructive border-2 shadow-destructive shadow-md " || "border-foreground" } rounded-xl px-4 py-2 w-full border-2 shadow-md transition focus:outline-hidden focus:shadow-xs`}
                  rows={10}
                  maxLength={250}
                  placeholder="Inserisci il tuo messaggio"
                  {...register('message', {
                    required: true,
                    minLength: 50,
                    maxLength: 250,
                  })}
                />
                <p className="mt-2 text-lg">
                  Caratteri Digitati: {formValue.message?.length || 0} / 250
                </p>
                {errors.message && (
                  <p className="mb-2 text-sm error md:text-base lg:text-lg">
                    Inserisci un messaggio di almeno 50
                  </p>
                )}
              </div>
            </div>
            <div className="mt-10 flex w-full justify-end">
              <Button
                disabled={IsSending}
                className={`w-full justify-center cursor-pointer text-lg  ${IsSending && "bg-foreground shadow shadow-primary text-background hover:bg-foreground"}`}
                type="submit"
              >
                {IsSending ? 'Invio in corso...' : 'Invia Messaggio'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
