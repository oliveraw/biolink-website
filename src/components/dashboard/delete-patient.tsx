import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'

import { deletePatient } from '@/graphql/mutations';
import { Button } from '@tremor/react'
import { TrashIcon } from '@heroicons/react/24/outline'

interface PatientData {
  name: string
  phone: string
  email: string
  birthday: string
  sex: string
  race: string
}

export default function DeletePatient({ 
    id 
}: {
    id: string
}) {
  const router = useRouter()

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (id) => await API.graphql({
      query: deletePatient,
      variables: {
        input: {
          id: id
        }
      }
    }),
    onSuccess(res) {
      router.push(`/dashboard/patients`)
    },
    onError(err) {
      console.log(err)
    }
  })

  return (
    <Button 
        icon={TrashIcon} 
        onClick={() => mutation.mutate(id)}
        color="red"
    >
        Delete Patient
    </Button>
  )
}
