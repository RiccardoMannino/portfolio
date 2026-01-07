import Link from 'next/link'


export default function Footer() {
  return (
    <footer className="h-10 text-base text-foreground font-semibold ">
      <div className="phone:flex-col phone:gap-6 phone:text-center flex flex-wrap items-center justify-between py-10">
        <p>© 2025 Riccardo Mannino<br/> CF - MNNRCR88P20G273S <br/>Tutti i diritti riservati. </p>
        <div className="phone:pb-10 phone:text-center flex items-center gap-5 font-semibold text-primary ombraxs">
          <Link href="/privacy">Privacy policy</Link>
        </div>
      </div>
    </footer>
  )
}
