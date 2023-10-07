import { useState } from 'react'
import { useForm } from "react-hook-form"
import { API } from 'aws-amplify'
import { useMutation } from '@tanstack/react-query'
import {
  Card,
  Title,
  DatePicker,
  DatePickerValue
} from '@tremor/react'

import Patient from '@/types/patient'

import { updatePatient } from '@/graphql/mutations'

import SubmitButton from "@/components/general/submit-button"

export default function ScheduleVisit({
  patient
}: {
  patient: Patient
}) {
  const [visits, setVisits] = useState<string[]>(patient.visitDates)
  const [date, setDate] = useState<DatePickerValue>(new Date())

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (date) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          visitDates: [...visits, date],
        }
      }
    }),
    onSuccess(res) {
      console.log(res)
      setVisits(res.data.updatePatient.visitDates)
    },
    onError(err) {
      console.log(err)
    }
  })

  const nextVisit = visits.length > 0 ? visits[visits.length - 1] : 'None scheduled';

  return (
    <Card className="space-y-4">
      <Title>Next Visit: {nextVisit}</Title>
      <form className="space-y-4" onSubmit={(e) => {
        e.preventDefault()
        if (date) mutation.mutate(date.toDateString())
      }}>
        <DatePicker
          value={date}
          onValueChange={setDate}
        />

        <SubmitButton loading={mutation.isLoading}>Schedule Visit</SubmitButton>
      </form>
    </Card>
  )
}