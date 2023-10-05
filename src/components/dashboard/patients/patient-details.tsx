import {
  Card,
  Flex,
  Title,
  Grid,
  Col,
  Text,
  Color
} from '@tremor/react'

import type Patient from '@/types/patient'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import DeletePatient from '@/components/dashboard/patients/delete-patient'
import PatientStageTracker from '@/components/dashboard/patients/patients-stage-tracker'

function capitalize(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase()
}

const statusColors: { [key: string]: Color } = {
  COMPLETED: 'emerald',
  SCHEDULED: 'amber',
  PENDING: 'rose'
}

export default function PatientDetails({
  patient
}: {
  patient: Patient
}) {
  return (
    <>
      <Card className="space-y-4">
        <Flex>
          <Title>Patient Details</Title>
          <StatusBadge size="xl" status={patient.status} />
        </Flex>

        <Grid numItemsSm={3}>
          <Col>
            <Text>Name: {patient.name}</Text>
            <Text>Birthday: {patient.birthday}</Text>
          </Col>
          <Col>
            <Text>Sex: {patient.sex}</Text>
            <Text>Race: {patient.race}</Text>
          </Col>
          <Col>
            <Text>Phone: {patient.phone}</Text>
            <Text>Email: {patient.email}</Text>
          </Col>
        </Grid>

        <PatientStageTracker patient={patient} />

        <Flex justifyContent="end">
          <DeletePatient id={patient.id} />
        </Flex>
      </Card>
    </>
  )
}
