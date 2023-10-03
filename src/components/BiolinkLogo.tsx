import { Nunito } from 'next/font/google'
import { useRouter } from 'next/router'
const nunito = Nunito({ subsets: ['latin'] })

export default function BiolinkLogo({ href } : { href: string }) {
    const router = useRouter()
    return <button className={nunito.className + " text-green-800 font-bold text-3xl"} onClick={() => router.push(href)}>biolink analytics</button>
}