export default function Header({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <h2 className="text-center text-2xl font-bold text-gray-900">
      {children}
    </h2>
  )
}
