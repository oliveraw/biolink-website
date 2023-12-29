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

export default function PatientHeader({
  patient,
  patientView = false
}: {
  patient: Patient
  patientView?: boolean
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

      {!patientView &&
        <Flex>
          <Link href={`/patients/${patient.id}`} target="_blank">
            <Button
              icon={EyeIcon}
              size="xs"
              variant="secondary"
            >
              Patient View
            </Button>
          </Link>
          <DeletePatient patient={patient} />
        </Flex>
      }
    </Card>
  )
}
