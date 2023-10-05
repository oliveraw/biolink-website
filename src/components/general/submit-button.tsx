import { ArrowPathIcon } from '@heroicons/react/24/outline'

export default function SubmitButton({
  children,
  loading
}: {
  children: React.ReactNode
  loading?: boolean
}) {
  return (
    <button
      type="submit"
      className="flex w-full justify-center rounded-md bg-green-800 hover:bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      disabled={loading}
    >
      {loading ? <ArrowPathIcon className="h-6 w-6 animate-spin" /> : children}
    </button>
  )
}
