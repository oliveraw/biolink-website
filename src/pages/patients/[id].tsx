// i'm adding this page bc in the whatsapp template i submitted for approval i linked biolinkanalytics/com/patients, in case they look
import Header from "@/components/auth/header";
import Layout from "@/components/auth/layout";
import { DatePicker, DatePickerValue } from "@tremor/react";
import { FormEventHandler, ReactElement, useState } from "react";
import { withSSRContext } from "aws-amplify";
import { GetServerSideProps } from "next";
import type Patient from '@/types/patient'
import { getPatient } from "@/graphql/queries";
import SubmitButton from "@/components/general/submit-button";
import PatientDetails from "@/components/dashboard/patients/patient-details";

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
            <PatientDetails patient={patient} />
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
