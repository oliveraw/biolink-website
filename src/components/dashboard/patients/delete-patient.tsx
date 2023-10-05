import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useMutation } from '@tanstack/react-query'

import { deletePatient } from '@/graphql/mutations';
import { Button } from '@tremor/react'
import { TrashIcon } from '@heroicons/react/24/outline'

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
        onClick={() => mutation.mutate(id)}
        icon={TrashIcon}
        size="xs"
        variant="secondary"
        color="rose"
    >
        Delete Patient
    </Button>
  )
}
