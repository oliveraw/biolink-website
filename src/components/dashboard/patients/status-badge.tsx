import { Badge, Size, Color } from '@tremor/react'

import { capitalize } from '@/utils/string'

const colors: { [key: string]: Color } = {
  COMPLETED: 'emerald',
  SCHEDULED: 'amber',
  PENDING: 'rose'
}

export default function StatusBadge({
  size = "xs",
  status
}: {
  size?: Size
  status: string
}) {
  return (
    <Badge color={colors[status]} size={size}>
      {capitalize(status)}
    </Badge>
  )
}
