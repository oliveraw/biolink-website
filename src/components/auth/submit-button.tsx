'use client'

import { useRouter } from 'next/navigation'

export default function SubmitButton({
  children,
}: {
  children: React.ReactNode
}) {
  const router = useRouter()

  return (
    <button
      onClick={() => router.push('/dashboard')}
      type="submit"
      className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    >
      {children}
    </button>
  )
}
