// app/api/getConfig/route.js

import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json({
    recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    emailJsPublicKey: process.env.EMAILJS_PUBLIC_KEY,
    callLink: process.env.CALL_LINK,
    emailJsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailJsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
  })
}
