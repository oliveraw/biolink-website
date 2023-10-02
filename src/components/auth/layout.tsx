export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      {children}
    </main>
  )
}
  