import { UseFormRegisterReturn } from 'react-hook-form'

export default function TextInput({
  type,
  register,
  error,
  children
}: {
  type: string,
  register: UseFormRegisterReturn,
  error?: string,
  children: React.ReactNode
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={register.name} className="text-sm font-medium text-gray-900">
        {children}
      </label>
      <input
        id={register.name}
        {...register}
        type={type}
        className="w-full rounded-md border border-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      />
      <span className="text-sm text-red-500">{error}</span>
    </div>
  )
}
