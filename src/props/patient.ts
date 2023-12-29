import type { GetServerSideProps } from 'next'
import { withSSRContext } from 'aws-amplify'

import { getPatient, listPatients } from '@/graphql/queries'
import type { Patient } from '@/API'

export const getPatientProps = (async (context) => {
  const SSR = withSSRContext(context)

  try {
      const res = await SSR.API.graphql({
          query: getPatient,
          variables: {
              id: context.query.id
          }
      })

      return {
          props: {
              patient: res.data.getPatient
          }
      }
  } catch (err) {
      console.log(err)
      return {
          props: {
              patient: null
          }
      }
  }
}) satisfies GetServerSideProps<{
  patient: Patient
}>

export const getPatientsProps = (async (context) => {
  const SSR = withSSRContext(context)

  try {
    const res = await SSR.API.graphql({ query: listPatients })

    return {
      props: {
        patients: res.data.listPatients.items
      }
    }
  } catch (err) {
    console.log(err)
    return {
      props: {
        patients: []
      }
    }
  }
}) satisfies GetServerSideProps<{
  patients: Patient[]
}>

export const getPatientsAndPatientProps = (async (context) => {
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
  patient: Patient
}>