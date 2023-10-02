import Link from 'next/link'
import BiolinkLogo from '../BiolinkLogo'

export default function Header({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
      <Link href="/" className="flex flex-col items-center">
        <BiolinkLogo />
      </Link>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  )
}
