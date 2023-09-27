import Link from 'next/link'

export default function TextLink({
  href,
  children
}: {
  href: string,
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
      {children}
    </Link>
  )
}
