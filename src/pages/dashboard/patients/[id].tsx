import { useEffect } from 'react'
import { useRouter } from 'next/router'
import type { ReactElement } from 'react'
import { Grid, Col } from '@tremor/react'

import { getPatientsAndPatientProps } from '@/props/patient'
import { Patient } from '@/API'

import PatientsList from '@/components/dashboard/patients/patients-list'
import PatientDetails from '@/components/dashboard/patients/patient-details'
import Layout from '@/components/dashboard/layout'

export const getServerSideProps = getPatientsAndPatientProps

export default function Patient({
  patients,
  patient
}: {
  patients: Patient[],
  patient: Patient
}) {
  const router = useRouter()
    
  useEffect(() => {
    if (!patient) router.replace('/dashboard/patients')
  })

  return (
    <Grid numItemsLg={6} className="gap-6">
      <Col numColSpanLg={2}>
        <PatientsList patients={patients} />
      </Col>

      <Col numColSpanLg={4}>
        <PatientDetails patient={patient} />
      </Col>
    </Grid>
  )
}

Patient.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
