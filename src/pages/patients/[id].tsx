import {
    Flex,
    Title,
    Grid,
    Col,
    Text,
    Card
} from '@tremor/react'
import { ReactElement, useState } from 'react'
import { Patient } from '@/API'
import { getPatientProps } from '@/props/patient'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import SelectStage from '@/components/dashboard/patients/select-stage'
import AddPsa from '@/components/dashboard/patients/add-psa'
import ScheduleVisit from '@/components/dashboard/patients/schedule-appointment'
import Layout from '@/components/auth/layout'
import Verify from '@/components/patients/verify'

export const getServerSideProps = getPatientProps

export default function PatientView({
    patient
}: {
    patient: Patient
}) {
    const [verified, setVerified] = useState<boolean>(false)

    if (!verified) return <Verify patient={patient} onVerify={() => setVerified(true)} />

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
            
            <SelectStage patient={patient} physician={false} />

            <AddPsa patient={patient} physician={false} />

            <ScheduleVisit patient={patient} />
        </Card>
    )

}

PatientView.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
