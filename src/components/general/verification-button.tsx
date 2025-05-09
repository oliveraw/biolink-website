import { ArrowPathIcon } from '@heroicons/react/24/outline'

export default function VerificationButton({
    children,
    onClick
}: {
    children: React.ReactNode
    onClick: React.MouseEventHandler
}) {
    return (
        <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-green-800 hover:bg-green-900 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={onClick}
        >
            {children}
        </button>
    )
}
