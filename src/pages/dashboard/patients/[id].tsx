import type { GetServerSideProps } from 'next'
import { withSSRContext } from 'aws-amplify'
import type { ReactElement } from 'react'
import { Grid, Col } from '@tremor/react'

import { listPatients, getPatient } from '@/graphql/queries'
import type Patient from '@/types/patient'

import PatientsList from '@/components/dashboard/patients/patients-list'
import PatientDetails from '@/components/dashboard/patients/patient-details'
import Layout from '@/components/dashboard/layout'

export const getServerSideProps = (async (context) => {
  const SSR = withSSRContext(context)

  try {
    const patientsRes = await SSR.API.graphql({ query: listPatients })
    const patientRes = await SSR.API.graphql({
      query: getPatient,
      variables: {
        id: context.query.id
      }
    })

    return {
      props: {
        patients: patientsRes.data.listPatients.items,
        patient: patientRes.data.getPatient
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        patients: [],
        patient: null
      }
    }
  }
}) satisfies GetServerSideProps<{
  patients: Patient[]
}>

export default function Patient({
  patients,
  patient
}: {
  patients: Patient[],
  patient: Patient
}) {
  return (
    <>
      <Grid numItemsLg={6} className="gap-6">
        <Col numColSpanLg={2}>
          <PatientsList patients={patients} />
        </Col>

        <Col numColSpanLg={4}>
          <PatientDetails patient={patient} />
        </Col>
      </Grid>
    </>
  )
}

Patient.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
