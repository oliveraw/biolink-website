import type { ReactElement } from 'react'
import { Card, Title, Text, Grid } from "@tremor/react"

import Layout from '@/components/dashboard/layout'
import { PieChart } from '@/components/dashboard/overview/pie-chart'
import SavingsGraph from '@/components/dashboard/overview/savings-graph'
import PatientEnrollment from '@/components/dashboard/overview/patient-enrollment'

export default function Overview() {
  return (
    <>
      {/* KPI section */}
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <PieChart />
        <SavingsGraph />
      </Grid>

      <div className="mt-4">
        <PatientEnrollment />
      </div>
    </>
  )
}

Overview.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
