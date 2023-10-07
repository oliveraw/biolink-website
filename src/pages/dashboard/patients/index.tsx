import type { ReactElement } from 'react'
import { Grid, Col } from '@tremor/react'

import type { Patient } from '@/API'
import { getPatients } from '@/utils/patients'

import PatientsTable from '@/components/dashboard/patients/patients-table'
import AddPatient from '@/components/dashboard/patients/add-patient'
import Layout from '@/components/dashboard/layout'

export const getServerSideProps = getPatients

export default function Patients({
  patients
}: {
  patients: Patient[]
}) {
  return (
    <>
      <Grid numItemsLg={6} className="gap-6">
        <Col numColSpanLg={4}>
          <PatientsTable patients={patients} />
        </Col>

        <Col numColSpanLg={2}>
          <AddPatient />
        </Col>
      </Grid>
    </>
  )
}

Patients.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
