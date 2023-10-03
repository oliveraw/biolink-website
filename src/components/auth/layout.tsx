import Link from 'next/link'

import BiolinkLogo from '@/components/BiolinkLogo'
import Copyright from '@/components/copyright'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-white">
      <header className="p-6 lg:px-8">
        <Link href="/">
          <BiolinkLogo />
        </Link>
      </header>
      <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {children}
      </main>
      <Copyright />
    </div>
  )
}
