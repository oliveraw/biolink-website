export default function Header({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
      <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
        {children}
      </h2>
    </div>
  )
}
