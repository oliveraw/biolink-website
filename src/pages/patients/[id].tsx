import { ReactElement, useState } from 'react'
import { Patient } from '@/API'
import { getPatientProps } from '@/props/patient'
import PatientDetails from '@/components/dashboard/patients/patient-details'
import Layout from '@/components/auth/layout'
import Verify from '@/components/patients/verify'

export const getServerSideProps = getPatientProps

export default function PatientView({
  patient
}: {
  patient: Patient
}) {
  const [verified, setVerified] = useState<boolean>(false)

  if (!verified) return <Verify patient={patient} onVerify={() => setVerified(true)} />

  return (
    <PatientDetails patient={patient} patientView />
  )

}

PatientView.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
