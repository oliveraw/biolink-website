import { Badge, Size, Color } from '@tremor/react'

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

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
