'use client'

import { IconBrandGoogle } from '@tabler/icons-react'
import { createClient } from '@/utils/supabase/client'
import Button from './Button'

export function LoginButton() {
  const handleLogin = async () => {
    const supabase = createClient()

    // Attiva il login con Google tramite Supabase
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        // Indica a Supabase dove rimandare l'utente dopo il login con Google.
        // Questa rotta di callback gestirà lo scambio dei token e salverà i cookie.
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    })
  }

  return (
    <Button
      onClick={handleLogin}
      className="shadow-foreground flex items-center gap-2 rounded-full border-2 border-black p-2 text-base text-black shadow-sm transition-all hover:cursor-pointer"
    >
      <IconBrandGoogle aria-hidden="true" className="h-5 w-5" />
      <span>Accedi con Google</span>
    </Button>
  )
}

export function LogOut() {
  const handleLogout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    // Dopo il logout, puoi reindirizzare l'utente a una pagina specifica se vuoi.
    window.location.href = '/'
  }

  return (
    <Button
      onClick={handleLogout}
      className="shadow-foreground flex items-center gap-2 rounded-full border-2 border-black p-2 text-base text-black shadow-sm transition-all hover:cursor-pointer"
    >
      <IconBrandGoogle aria-hidden="true" className="h-5 w-5" />
      <span>Esci da Google</span>
    </Button>
  )
}
