import { Badge, Size, Color } from '@tremor/react'

import { Patient, Status } from '@/API'

import statuses from '@/info/statuses'

const colors = {
  [Status.NOT_APPLICABLE]: 'slate',
  [Status.PENDING]: 'rose',
  [Status.SCHEDULED]: 'amber',
  [Status.COMPLETED]: 'emerald',
}

export default function StatusBadge({
  patient,
  size = "xs"
}: {
  patient: Patient
  size?: Size
}) {
  return (
    <Badge color={colors[patient.status] as Color} size={size}>
      {statuses[patient.status]}
    </Badge>
  )
}
