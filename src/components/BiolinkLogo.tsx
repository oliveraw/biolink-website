import Image from 'next/image'

import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function BiolinkLogo() {
  return (
    <img src="/Logo.svg" alt="BioLink" className="h-16 w-auto" />
  )
}