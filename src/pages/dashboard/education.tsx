import type { ReactElement } from 'react'

import Layout from '@/components/dashboard/layout'
import { Card, Col, Grid, Title } from '@tremor/react'
import StageInformationAccordion from '@/components/dashboard/education/stage-information'
import EducationalArticles from '@/components/dashboard/education/articles'

export default function Education() {
  return (
    <div>
      <Grid numItemsSm={2} numItemsMd={3} className="mt-6 gap-4">
        <Col numColSpan={1}>
          <StageInformationAccordion/>
        </Col>
        <Col numColSpanLg={2}>
          <Card>
            <Title>Current Articles</Title>
            <EducationalArticles/>
          </Card>
        </Col>
      </Grid>
    </div>
  )
}

Education.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
