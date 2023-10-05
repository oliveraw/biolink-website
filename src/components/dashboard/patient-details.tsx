import {
  Card,
  Title,
  Text,
  Button
} from '@tremor/react'

import type Patient from '@/types/patient'
import DeletePatient from './delete-patient'
import PatientStageTracker from './patients-stage-tracker'
import PatientsStageBlurb from './patients-stage-blurb'

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
          <Text>Name: {patient.name}</Text>
          <Text>Birthday: {patient.birthday}</Text>
          <Text>Sex: {patient.sex}</Text>
          <Text>Race: {patient.race}</Text>
          <Text>Stage: {capitalize(patient.stage)}</Text>
          <Text>Status: {capitalize(patient.status)}</Text>
          <Text>Phone: {patient.phone}</Text>
          <Text>Email: {patient.email}</Text>
        </Card>
        <div className="w-full flex flex-col mt-8 gap-y-8 items-center">
          <PatientStageTracker patient={patient} />
          <PatientsStageBlurb patient={patient} />
        </div>
      </Card>
    </>
  )
}
