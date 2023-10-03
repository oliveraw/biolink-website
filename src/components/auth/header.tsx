import Link from 'next/link'
import BiolinkLogo from '../BiolinkLogo'

export default function Header() {
  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <BiolinkLogo href='/' />
          </div>
          <div className="flex flex-1 justify-end">
            <Link href="/auth/sign-in" className="text-sm font-semibold leading-6 text-gray-900">
              Sign in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </header>
    </div>
  )
}
