import { NextResponse } from 'next/server'

export async function GET() {
  const responseData = {
    emailJsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    callLink: process.env.CALL_LINK,
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
  }

  // Restituisci la risposta JSON
  return NextResponse.json(responseData)
}
