import Link from 'next/link'

export default function TextLink({
  href,
  children
}: {
  href: string,
  children: React.ReactNode
}) {
  return (
    <Link href={href} className="font-semibold leading-6 text-green-800 hover:text-green-900">
      {children}
    </Link>
  )
}
