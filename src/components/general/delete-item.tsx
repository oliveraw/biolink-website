import { Button } from '@tremor/react'
import { TrashIcon } from '@heroicons/react/24/outline'
import { UseMutationResult } from '@tanstack/react-query'

export default function DeleteItem({
  mutation,
  index,
}: {
  mutation: UseMutationResult<any, Error, number>
  index: number
}) {
  return (
    <Button
      size="xs"
      variant="light"
      color="rose"
      icon={TrashIcon}
      onClick={() => mutation.mutate(index)}
    />
  )
}
