import {
  Card,
  Title,
  Text
} from '@tremor/react'

import type Patient from '@/types/patient'

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export default function PatientDetails({
  patient
}: {
  patient: Patient
}) {
  return (
    <Card>
      <Title>Patient Details</Title>
      <Text>Name: {patient.name}</Text>
      <Text>Birthday: {patient.birthday}</Text>
      <Text>Sex: {patient.sex}</Text>
      <Text>Race: {patient.race}</Text>
      <Text>Stage: {capitalize(patient.stage)}</Text>
      <Text>Status: {capitalize(patient.status)}</Text>
      <Text>Phone: {patient.phone}</Text>
      <Text>Email: {patient.email}</Text>
    </Card>
  )
}
