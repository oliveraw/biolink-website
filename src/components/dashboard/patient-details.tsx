import {
  Card,
  Title,
  Text,
} from '@tremor/react'

import type Patient from '@/types/patient'
import DeletePatient from '@/components/dashboard/delete-patient'
import PatientStageTracker from '@/components/dashboard/patients-stage-tracker'

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

export default function PatientDetails({
  patient
}: {
  patient: Patient
}) {
  return (
    <>
      <Card>
        <div className="flex flex-row justify-between">
          <div className="w-full">
            <Title>Patient Details</Title>
          </div>
          <div className="h-10">
            <DeletePatient id={patient.id} />
          </div>
        </div>
        <Card className="mt-5">
          <Title>{patient.name}</Title>
          <Text>Birthday: {patient.birthday}</Text>
          <Text>Sex: {patient.sex}</Text>
          <Text>Race: {patient.race}</Text>
          <Text>Stage: {capitalize(patient.stage)}</Text>
          <Text>Status: {capitalize(patient.status)}</Text>
          <Text>Phone: {patient.phone}</Text>
          <Text>Email: {patient.email}</Text>
        </Card>
        <div className="mt-8">
          <PatientStageTracker patient={patient} />
        </div>
      </Card>
    </>
  )
}
