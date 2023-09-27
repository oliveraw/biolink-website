import type { ReactElement } from 'react'

import Layout from '@/components/dashboard/layout'

export default function Savings() {
  return (
    <div>
      <h1>Yerr</h1>
    </div>
  )
}

Savings.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
