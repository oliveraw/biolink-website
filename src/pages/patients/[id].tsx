// i'm adding this page bc in the whatsapp template i submitted for approval i linked biolinkanalytics/com/patients, in case they look
import Header from "@/components/auth/header";
import Layout from "@/components/auth/layout";
import {
    Flex,
    Title,
    Grid,
    Col,
    Text,
    DatePicker
} from '@tremor/react'
import { FormEventHandler, ReactElement, useState } from "react";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";
import type Patient from '@/types/patient'
import { getPatient } from "@/graphql/queries";
import SubmitButton from "@/components/general/submit-button";
import PatientStageTracker from "@/components/dashboard/patients/stage-viewer";
import StatusBadge from "@/components/dashboard/patients/status-badge";

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

export default function PatientView({
    patient
}: {
    patient: Patient
}) {
    const [verified, setVerified] = useState<boolean>(false)

    if (!verified) {
        return (
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form
                    className="flex flex-col justify-center gap-y-8 items-center"
                    onSubmit={() => setVerified(true)}
                >
                    <Header>Please verify your date of birth:</Header>
                    <DatePicker
                        className="max-w-sm mx-auto"
                        enableYearNavigation={true}
                        placeholder="Select date"
                    // value={date}
                    // onValueChange={setDate}
                    />
                    <SubmitButton>Submit</SubmitButton>
                </form>
            </div>
        )
    }
    return (
        <>
            <div className="flex flex-col gap-y-4">
                <Flex>
                    <Title>{patient.name}</Title>
                    <StatusBadge size="xl" status={patient.status} />
                </Flex>

                <Grid numItemsSm={4}>
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
                    <Col>
                        <DatePicker
                            className="max-w-sm mx-auto grow-2"
                            enableYearNavigation={true}
                            placeholder="Schedule a visit"
                        />
                        <SubmitButton>Submit</SubmitButton>
                    </Col>
                </Grid>
                <PatientStageTracker patient={patient} />
            </div>
        </>
    )

}

PatientView.getLayout = function getLayout(page: ReactElement) {
    return (
        <Layout>
            {page}
        </Layout>
    )
}
