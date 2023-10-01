import { Nunito } from 'next/font/google'
import Image from 'next/image'

const nunito = Nunito({ subsets: ['latin'] })

export default function Header({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
      <div className="flex flex-col items-center">
        <h1 className={nunito.className + " text-green-900 text-5xl font-bold"}>biolink analytics</h1>
      </div>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  )
}
