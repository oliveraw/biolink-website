import { Nunito } from 'next/font/google'
const nunito = Nunito({ subsets: ['latin'] })

export default function BiolinkLogo({ onClick }: { onClick: React.MouseEventHandler<HTMLElement>}) {
    return <button className={nunito.className + " text-green-800 font-bold text-3xl"} onClick={onClick}>biolink analytics</button>
}