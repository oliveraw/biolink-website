import {
    Flex,
    Title,
    Grid,
    Col,
    Text,
    Card
} from '@tremor/react'
import { ReactElement, useState } from 'react'
import { withSSRContext } from 'aws-amplify'
import { GetServerSideProps } from 'next'
import { Patient } from '@/API'
import { getPatient } from '@/graphql/queries'
import StatusBadge from '@/components/dashboard/patients/status-badge'
import SelectStage from '@/components/dashboard/patients/select-stage'
import PsaInput from '@/components/dashboard/patients/psa-input'
import ScheduleVisit from '@/components/dashboard/patients/schedule-visit'
import Layout from '@/components/auth/layout'
import Verify from '@/components/patients/verify'

export const getServerSideProps = (async (context) => {
    const SSR = withSSRContext(context)

    try {
        const patientRes = await SSR.API.graphql({
            query: getPatient,
            variables: {
                id: context.query.id
            }
        })

        return {
            props: {
                patient: patientRes.data.getPatient
            }
        }
    } catch (err) {
        console.log(err)
        return {
            props: {
                patient: null
            }
        }
    }
}) satisfies GetServerSideProps<{
    patient: Patient
}>

interface VerifyData {
    birthday: string
}

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

            <PsaInput patient={patient} physician={false} />

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
