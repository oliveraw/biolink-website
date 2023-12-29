import { Callout } from '@tremor/react'
import { ExclamationTriangleIcon } from '@heroicons/react/24/solid'

export default function ErrorCallout({
  error,
}: {
  error: string,
}) {
  return (
    <Callout
      title="Error"
      icon={ExclamationTriangleIcon}
      color="rose"
    >
      {error}
    </Callout>
  )
}
