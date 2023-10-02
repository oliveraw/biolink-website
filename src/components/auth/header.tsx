import { useRouter } from 'next/router'
import BiolinkLogo from '../BiolinkLogo'

export default function Header({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
      <div className="flex flex-col items-center">
        <BiolinkLogo onClick={() => router.push('/')}/>
      </div>
      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  )
}
