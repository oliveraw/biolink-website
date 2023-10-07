import {
  Card,
  Flex,
  Title,
  Grid,
  Col,
  Text,
  Bold
} from '@tremor/react'

import type Patient from '@/types/patient'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import DeletePatient from '@/components/dashboard/patients/delete-patient'
import SelectStage from '@/components/dashboard/patients/select-stage'
import PsaInput from '@/components/dashboard/patients/psa-input'
import ScheduleVisit from '@/components/dashboard/patients/schedule-visit'

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

      <SelectStage patient={patient} />

      <ScheduleVisit patient={patient} />

      <PsaInput patient={patient} />

      <Flex justifyContent="end">
        <DeletePatient id={patient.id} />
      </Flex>
    </Card>
  )
}
