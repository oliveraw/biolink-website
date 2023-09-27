import type { ReactElement } from 'react'
import { Card, Title, Text, Grid } from "@tremor/react"

import Layout from '@/components/dashboard/layout'

export default function Overview() {
  return (
    <>
      <Card>
        <div className="h-96" />
      </Card>

      {/* KPI section */}
      <Grid numItemsMd={2} className="mt-6 gap-6">
        <Card>
          {/* Placeholder to set height */}
          <div className="h-28" />
        </Card>
        <Card>
          {/* Placeholder to set height */}
          <div className="h-28" />
        </Card>
      </Grid>
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
