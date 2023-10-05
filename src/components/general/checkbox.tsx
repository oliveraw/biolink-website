import { UseFormRegisterReturn } from 'react-hook-form';

export default function Checkbox({
  register,
  children
}: {
  register: UseFormRegisterReturn,
  children: React.ReactNode
}) {
  return (
    <div className='flex items-center'>
      <input
        id={register.name}
        type='checkbox'
        {...register}
        className='h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded'
      />
      <label htmlFor={register.name} className='ml-2 text-sm text-gray-900'>
        {children}
      </label>
    </div>
  )
}
