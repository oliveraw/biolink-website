import type { ReactElement } from 'react'
import { Grid, Col } from '@tremor/react'

import type { Patient } from '@/API'
import { getPatientsProps } from '@/props/patient'

import PatientsTable from '@/components/dashboard/patients/patients-table'
import AddPatient from '@/components/dashboard/patients/add-patient'
import Layout from '@/components/dashboard/layout'

export const getServerSideProps = getPatientsProps

export default function Patients({
  patients
}: {
  patients: Patient[]
}) {
  return (
    <Grid numItemsLg={3} className="gap-6">
      <Col numColSpanLg={2}>
        <PatientsTable patients={patients} />
      </Col>
      <Col>
        <AddPatient />
      </Col>
    </Grid>
  )
}

Patients.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
