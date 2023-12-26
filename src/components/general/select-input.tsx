<<<<<<< Updated upstream
import { useController, UseControllerProps, FieldValues } from 'react-hook-form'
import { Fragment } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/solid'

export default function SelectInput<FormData extends FieldValues>(props: UseControllerProps<FormData> & {
  options: string[],
  multiple?: boolean,
  children: React.ReactNode
}) {
  const { field, fieldState } = useController(props)
  const { options, multiple = false, children } = props

  const hasValue = multiple ? field.value && field.value.length : !!field.value

  return (
    <Listbox
      {...field}
      multiple={multiple}
      as="div"
      className="relative space-y-2"
    >
      <Listbox.Label className="text-sm font-medium text-gray-900">{children}</Listbox.Label>
      <Listbox.Button className="flex items-center justify-between w-full rounded-md border border-gray-50 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600">
        <span className={`px-3 py-2 text-sm ${hasValue ? 'text-gray-900' : 'text-gray-400'}`}>
          {hasValue ? (
            multiple ? field.value.join(', ') : field.value
          ) : (
            multiple ? 'Select one or more' : 'Select one'
          )}
        </span>
        <div className="flex divide-x divide-text-gray-400">
          <span
            onClick={(e) => {
              e.preventDefault()
              field.onChange(multiple ? [] : '')
            }}
            className="px-3 py-1 text-gray-400 hover:text-gray-900"
          >
            <XMarkIcon className="h-4 w-4" />
          </span>
          <span className="px-3 py-1 text-gray-400 hover:text-gray-900">
            <ChevronDownIcon className="h-4 w-4" />
          </span>
        </div>
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options
          static
          className="absolute z-10 w-full bg-white shadow-lg max-h-56 rounded-md ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none"
        >
          {options.map((option) => (
            <Listbox.Option
              key={option}
              className={"flex items-center justify-between px-3 py-2 text-sm text-gray-900 cursor-pointer ui-active:bg-gray-100"}
              value={option}
            >
              {({ selected }) => (
                <>
                  <span className={"ui-selected:font-semibold"}>
                    {option}
                  </span>
                  {selected && <CheckIcon className={"h-4 w-4 ui-selected:font-semibold"} />}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
      <span className="text-sm text-red-500">{fieldState.error?.message}</span>
    </Listbox>
=======
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
>>>>>>> Stashed changes
  )
}
