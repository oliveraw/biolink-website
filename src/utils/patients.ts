import type { GetServerSideProps } from 'next'
import { withSSRContext } from 'aws-amplify'

import { listPatients } from '@/graphql/queries'
import type Patient from '@/types/patient'

export const getPatients = (async (context) => {
  const SSR = withSSRContext(context)

  try {
    const res = await SSR.API.graphql({ query: listPatients })

    return {
      props: {
        patients: res.data.listPatients.items
      }
    }
  } catch (err) {
    return {
      props: {
        patients: []
      }
    }
  }
}) satisfies GetServerSideProps<{
  patients: Patient[]
}>