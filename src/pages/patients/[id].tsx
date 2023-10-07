// i'm adding this page bc in the whatsapp template i submitted for approval i linked biolinkanalytics/com/patients, in case they look
import Header from "@/components/auth/header";
import Layout from "@/components/auth/layout";
import {
    Flex,
    Title,
    Grid,
    Col,
    Text,
    DatePicker,
    Card
} from '@tremor/react'
import { useForm } from 'react-hook-form'
import { ReactElement, useState } from "react";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";
import { Patient } from '@/API'
import { getPatient } from "@/graphql/queries";
import SubmitButton from "@/components/general/submit-button";
import StatusBadge from "@/components/dashboard/patients/status-badge";
import TextInput from '@/components/general/text-input'
import SelectStage from '@/components/dashboard/patients/select-stage'
import PsaInput from '@/components/dashboard/patients/psa-input'
import ScheduleVisit from '@/components/dashboard/patients/schedule-visit'

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
    
    const { register, handleSubmit } = useForm<VerifyData>()

    if (!verified) {
        return (
            <>
                <Header>Verify Date of Birth</Header>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit(() => setVerified(true))}>
                        <TextInput
                            type="date"
                            register={register('birthday', {
                                required: 'Birthday required',
                            })}
                        >
                            Birthday
                        </TextInput>

                        <SubmitButton>Submit</SubmitButton>
                    </form>
                </div>
            </>
        )
    }
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
