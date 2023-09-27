import type { ReactElement } from 'react'
import { Grid, Col } from '@tremor/react'

import PatientsTable from '@/components/dashboard/patients-table'
import AddPatient from '@/components/dashboard/add-patient'
import Layout from '@/components/dashboard/layout'

export default function Patients() {
  return (
    <>
      <Grid numItemsLg={6} className="gap-6 mt-6">
        <Col numColSpanLg={4}>
          <PatientsTable />
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
