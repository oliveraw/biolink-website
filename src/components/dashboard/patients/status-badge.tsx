import { Badge, Size, Color } from '@tremor/react'

import { Patient, PatientStatus } from '@/API'

import { capitalize } from '@/utils/string'

const colors: { [key: string]: Color } = {
  COMPLETED: 'emerald',
  SCHEDULED: 'amber',
  PENDING: 'rose'
}

export default function StatusBadge({
  patient,
  size = "xs"
}: {
  patient: Patient
  size?: Size
}) {
  const dateExsits = patient.visitDates.length > 0;
  const date = dateExsits && new Date(patient.visitDates[patient.visitDates.length - 1])

  const status = dateExsits ? (date < new Date() ? PatientStatus.COMPLETED : PatientStatus.SCHEDULED) : PatientStatus.PENDING;

  return (
    <Badge color={colors[status]} size={size}>
      {capitalize(status)}
    </Badge>
  )
}
