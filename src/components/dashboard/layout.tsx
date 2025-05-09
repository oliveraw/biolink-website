import NavBar from './nav-bar'
import Copyright from '@/components/copyright'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavBar />
      <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:px-8">
        {children}
      </main>
      <Copyright />
    </>
  )
}