import { Fragment, useState } from 'react'
import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'

import { deletePatient } from '@/graphql/mutations'
import { Button, Title, Text, Flex } from '@tremor/react'
import { TrashIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog, Transition } from '@headlessui/react'
import { Patient } from '@/API'
import ErrorCallout from '@/components/general/error-callout'

export default function DeletePatient({ 
  patient 
}: {
  patient: Patient
}) {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  const router = useRouter()

  const mutation = useMutation<any, Error>({
    mutationFn: async () => await API.graphql({
      query: deletePatient,
      variables: {
        input: {
          id: patient.id,
        }
      }
    }),
    onSuccess() {
      router.push(`/dashboard/patients`)
    },
  })

  return (
    <>
      <Button
        onClick={openModal}
        icon={TrashIcon}
        size="xs"
        variant="secondary"
        color="rose"
      >
          Delete Patient
      </Button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 flex min-h-full items-center justify-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl space-y-4 transition-all">
                <Title>Delete Patient</Title>

                <Text>
                  Please confirm you would like to delete patient {patient.name}. This action will permanantly delete the patient from our records and can not be reverted.
                </Text>

                {mutation.isError && <ErrorCallout error={mutation.error.message} />}

                <Flex>
                  <Button
                    onClick={() => mutation.mutate()}
                    icon={TrashIcon}
                    variant="secondary"
                    color="rose"
                    size="xs"
                  >
                    Delete
                  </Button>
                  <Button
                    onClick={closeModal}
                    icon={XMarkIcon}
                    variant="secondary"
                    color="gray"
                    size="xs"
                  >
                    Cancel
                  </Button>
                </Flex>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
