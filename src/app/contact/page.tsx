'use client'
import { ReactNode, useEffect, useState } from 'react'
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
import Link from 'next/link'

type ConfigData = {
  recaptchaSiteKey: string
  emailJsPublicKey: string
  callLink: string
  emailJsServiceId: string
  emailJsTemplateId: string
}
export default function Contact() {
  const [IsSending, setIsSending] = useState(false)
  const [IsCaptcha, setIsCaptcha] = useState(true)
  const [captchaToken, setCaptchaToken] = useState<string | null>(null)
  const [config, setConfig] = useState<ConfigData>({} as ConfigData)

  type Pagine = {
    pagina: string
    href: string
    image?: ReactNode
  }

  const social: Pagine[] = [
    {
      pagina: 'Linkedin',
      href: 'https://www.linkedin.com/in/riccardo-mannino/',
      image: <IconBrandLinkedin size={20} />,
    },
    {
      pagina: 'Github',
      href: 'https://github.com/RiccardoMannino/',
      image: <IconBrandGithub size={20} />,
    },
  ]

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const response = await fetch('/api/getConfig')
        const data: ConfigData = await response.json()
        setConfig(data)
      } catch (error) {
        console.error('Errore durante il fetch della configurazione:', error)
      }
    }

    fetchConfig()
  }, [])

  // Funzione per inviare l'email
  const sendEmail = async (data: FieldValues) => {
    if (!config) {
      console.error('Configurazione non disponibile')
      return
    }

    try {
      setIsSending(true)

      const result = await emailjs.send(
        config.emailJsServiceId,
        config.emailJsTemplateId,
        data,
        config.emailJsPublicKey,
      )

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
          Errore nell&apos; invio del messaggio ⛔
        </div>
      ))
    } finally {
      setIsSending(false)
      setIsCaptcha(true)
      setCaptchaToken(null)
      sessionStorage.clear()
      reset()
    }
  }

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

  function onChange(value: string | null) {
    if (value) {
      setCaptchaToken(value) // Salva il token CAPTCHA
      setIsCaptcha(false)
    }
  }

  return (
    <>
      <h1 className="mb-4 text-center font-bold phone:text-xl md:text-3xl">
        Contattami <span>✉️</span>
      </h1>
      <p className="mb-2 text-center text-sm text-neutral-500 md:text-base lg:text-lg">
        Compila il Form sottostante e ti risponderò il prima possibile oppure
        prenota una chiamata.
      </p>

      <div className="flex gap-10 phone:flex-col">
        <div>
          <div className="mt-8 flex items-center gap-2">
            <div className="rounded-lg bg-emerald-500 p-4 text-neutral-50">
              {<IconMail />}
            </div>
            <div className="flex flex-col">
              <p className="text-sm font-semibold text-neutral-500 md:text-base lg:text-lg">
                Email
              </p>
              <a
                className="font-semibold text-emerald-400"
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
              <p className="text-sm font-semibold text-neutral-500 md:text-base lg:text-lg">
                Location
              </p>
              <p className="font-semibold text-emerald-400">Palermo, IT</p>
            </div>
          </div>

          <div className="mt-8 flex">
            {social.map((so) => (
              <Link
                href={so.href}
                target="_blank"
                key={so.href}
                className="flex transform p-[6px] text-sm text-neutral-50 delay-75 duration-100 ease-in hover:stroke-neutral-700 hover:text-neutral-700 phone:justify-center phone:stroke-neutral-50"
              >
                <div className="rounded-lg bg-emerald-500 p-3 hover:cursor-pointer">
                  {so.image}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <form onSubmit={handleSubmit(sendEmail)}>
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
                    pattern:
                      /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ']+\s[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ']+$/,
                  })}
                  className={` ${(errors.name && 'border-red-500 bg-red-100 focus:outline-none focus:ring focus:ring-red-300') || 'bg-neutral-100'} w-full rounded-xl border bg-neutral-100 p-3 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-emerald-200 md:text-base lg:text-lg`}
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
                  className={` ${(errors.email && 'border-red-500 bg-red-100 focus:outline-none focus:ring focus:ring-red-300') || 'bg-neutral-100'} w-full rounded-xl border bg-neutral-100 p-3 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-emerald-200 md:text-base lg:text-lg`}
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
                  className={`w-full rounded-xl border bg-neutral-100 p-3 indent-3 text-sm text-neutral-500 focus:border-gray-400 focus:outline-none focus:ring focus:ring-emerald-200 md:text-base lg:text-lg ${(errors.message && 'border-red-500 bg-red-100') || 'bg-neutral-100'}`}
                  rows={10}
                  placeholder="Inserisci il tuo messaggio"
                  {...register('message', {
                    required: true,
                    minLength: 50,
                    maxLength: 250,
                  })}
                />
                <p className="mt-2 text-sm text-neutral-500 md:text-base lg:text-lg">
                  Caratteri Digitati: {formValue.message?.length || 0}
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
                Invia Messaggio
              </button>
            </div>
          </form>

          <div className="mt-7">
            <button
              className="bold rounded-full bg-gray-900 px-3 py-3 text-xs font-semibold text-white"
              data-cal-namespace="30min"
              data-cal-link={config?.callLink}
              data-cal-config='{"layout":"month_view"}'
            >
              Prenota chiamata
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
