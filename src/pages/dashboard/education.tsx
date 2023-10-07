import type { ReactElement } from 'react'

import Layout from '@/components/dashboard/layout'
import { Grid, Col } from '@tremor/react'
import StageInformationAccordion from '@/components/dashboard/education/stage-information'
import EducationalArticles from '@/components/dashboard/education/articles'

export default function Education() {
  return (
    <Grid numItemsSm={2} numItemsMd={3} className="gap-4">
      <Col numColSpan={1}>
        <StageInformationAccordion />
      </Col>
      <Col numColSpanLg={2}>
        <EducationalArticles />
      </Col>
    </Grid>
  )
}

Education.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
