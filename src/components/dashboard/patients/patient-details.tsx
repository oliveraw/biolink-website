import {
  Card,
  Flex,
  Title,
  Grid,
  Col,
  Text
} from '@tremor/react'

import type Patient from '@/types/patient'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import DeletePatient from '@/components/dashboard/patients/delete-patient'
import StageSelect from '@/components/dashboard/patients/stage-select'

export default function PatientDetails({
  patient
}: {
  patient: Patient
}) {
  return (
    <Card className="space-y-4">
      <Flex>
        <Title>{patient.name}</Title>
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

      <StageSelect patient={patient} />

      <Flex justifyContent="end">
        <DeletePatient id={patient.id} />
      </Flex>
    </Card>
  )
}
