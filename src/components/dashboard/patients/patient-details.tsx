import {
  Card,
  Flex,
  Title,
  Grid,
  Col,
  Text,
  Button
} from '@tremor/react'
import Link from 'next/link'
import { Patient } from '@/API'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import DeletePatient from '@/components/dashboard/patients/delete-patient'
import SelectStage from '@/components/dashboard/patients/select-stage'
import PsaInput from '@/components/dashboard/patients/psa-input'
import ScheduleVisit from '@/components/dashboard/patients/schedule-visit'
import TextLink from "@/components/general/text-link"
import { EyeIcon } from '@heroicons/react/24/outline'

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

      <PsaInput patient={patient} />

      <ScheduleVisit patient={patient} />

      <Flex>
        <Link href={`/patients/${patient.id}`}>
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
