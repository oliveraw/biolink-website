import {
  Card,
  Flex,
  Title,
  Grid,
  Col,
  Text,
  Button,
} from '@tremor/react'
import Link from 'next/link'
import { EyeIcon } from '@heroicons/react/24/outline'

import { Patient } from '@/API'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import DeletePatient from '@/components/dashboard/patients/delete-patient'
import SelectStage from '@/components/dashboard/patients/select-stage'
import AddPsa from '@/components/dashboard/patients/add-psa'
import ScheduleVisit from '@/components/dashboard/patients/schedule-appointment'

export default function PatientDetails({
  patient
}: {
  patient: Patient
}) {
  return (
    <Card className="space-y-4">
      <Flex>
        <Title>{patient.name}</Title>
        <StatusBadge patient={patient} size="xl" />
      </Flex>

      <Grid numItemsSm={2}>
        <Col>
          <Text>Name: {patient.name}</Text>
          <Text>Birthday: {patient.birthday}</Text>
          <Text>Phone: {patient.phone}</Text>
          <Text>Email: {patient.email}</Text>
        </Col>
        <Col>
          <Text>Sex: {patient.sex}</Text>
          <Text>Race: {patient.race}</Text>
          <Text>Condition: {patient.condition}</Text>
          <Text>Treatments: {patient.treatments.join(', ')}</Text>
        </Col>
      </Grid>

      <SelectStage patient={patient} />

<<<<<<< Updated upstream
      <Grid numItemsSm={2} className="gap-4">
        <Col>
          <AddPsa patient={patient} />
        </Col>
        <Col>
          <ScheduleVisit patient={patient} />
        </Col>
      </Grid>
=======
      <AddPsa patient={patient} />

      <ScheduleVisit patient={patient} />
>>>>>>> Stashed changes

      <Flex>
        <Link href={`/patients/${patient.id}`} target="_blank">
          <Button
            icon={EyeIcon}
            size="xs"
            variant="secondary"
          >
            See Patient View
          </Button>
        </Link>
        <DeletePatient id={patient.id} />
      </Flex>
    </Card>
  )
}
