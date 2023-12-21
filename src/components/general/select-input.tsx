import { UseFormRegisterReturn } from 'react-hook-form';

export default function SelectInput({
  options,
  register,
  error,
  children,
}: {
  options: Array<string>,
  register: UseFormRegisterReturn,
  error?: string,
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
          defaultValue=""
          {...register}
          className="block w-full rounded-md border border-gray-50 px-3 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        >
          <option disabled value="">Select one</option>
          {options.map((option, idx) => (
            <option value={option} key={idx}>{option}</option>
          ))}
        </select>
      </div>
      <span className='text-sm text-red-500'>{error}</span>
    </div>
  )
}
