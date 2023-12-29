import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { validatePhoneNumber, formatPhoneNumber } from '@/util/phone'

export default function PhoneInput<FormData extends FieldValues>(props: UseControllerProps<FormData> & {
  children: React.ReactNode
}) {
  let propsCopy = { ...props }
  propsCopy.rules = propsCopy.rules || {}
  propsCopy.rules.validate = (value) => validatePhoneNumber(value) || 'Invalid phone number'

  const { field, fieldState } = useController(propsCopy)
  const { name, children } = propsCopy

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-gray-900">
        {children}
      </label>
      <input
        id={name}
        {...field}
        onChange={(e) => field.onChange(formatPhoneNumber(e.target.value))}
        type={'tel'}
        className="w-full rounded-md border border-gray-50 px-3 py-2 text-sm text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
      />
      <span className="text-sm text-red-500">{fieldState.error?.message}</span>
    </div>
  )
}
