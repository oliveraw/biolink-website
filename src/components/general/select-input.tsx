import { UseFormRegisterReturn } from 'react-hook-form';

interface hasNameAndValue {
  name: string
  value: string
}

export default function TextSelector({
  register,
  options,
  children
}: {
  register: UseFormRegisterReturn,
  options: Array<hasNameAndValue>,
  children: React.ReactNode
}) {
  return (
    <div>
      <label htmlFor={register.name} className="block text-sm font-medium leading-6 text-gray-900">
        {children}
      </label>
      <div className="mt-2">
        <select
          id={register.name}
          {...register}
          className="block w-full rounded-md border border-gray-50 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option disabled selected value="">Select Option...</option>
          {options.map((item, idx) => (
            <option value={item.value} key={idx}>{item.name} </option>
          ))}
        </select>
      </div>
    </div>
  )
}
