import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function BiolinkLogo() {
  return <button className={nunito.className + " text-green-800 font-bold text-3xl"}>biolink analytics</button>
}