import { Grid, Col } from '@tremor/react'

import { Patient } from '@/API'
import PatientHeader from '@/components/dashboard/patients/patient-header'
import SelectStage from '@/components/dashboard/patients/select-stage'
import AddPsa from '@/components/dashboard/patients/add-psa'
import AddApointment from '@/components/dashboard/patients/add-appointment'
import AddNote from '@/components/dashboard/patients/add-note'

export default function PatientDetails({
  patient,
  patientView = false
}: {
  patient: Patient
  patientView?: boolean
}) {
  return (
    <Grid numItemsSm={2} className="gap-6">
      <Col numColSpanSm={2}>
        <PatientHeader patient={patient} patientView={patientView} />
      </Col>
      <Col numColSpanSm={2}>
        <SelectStage patient={patient} patientView={patientView} />
      </Col>
      <Col>
        <AddPsa patient={patient} patientView={patientView} />
      </Col>
      <Col>
        <AddApointment patient={patient} />
      </Col>
      <Col numColSpanSm={2}>
        <AddNote patient={patient} patientView={patientView} />
      </Col>
    </Grid>
  )
}
