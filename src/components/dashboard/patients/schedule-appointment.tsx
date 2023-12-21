import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { useMutation } from '@tanstack/react-query'
import {
  Card,
  Flex,
  Title,
  DatePicker,
  DatePickerValue
} from '@tremor/react'

import { Patient, Appointment } from '@/API'

import { updatePatient } from '@/graphql/mutations'

import SubmitButton from "@/components/general/submit-button"

export default function ScheduleAppointment({
  patient
}: {
  patient: Patient
}) {
  const [appointments, setAppointments] = useState<Appointment[]>(patient.appointments)
  const [date, setDate] = useState<DatePickerValue>(new Date())

  useEffect(() => {
    setAppointments(patient.appointments)
  }, [patient])

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (date) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          appointments: [...appointments, date],
        }
      }
    }),
    onSuccess(res) {
      setAppointments(res.data.updatePatient.appointments)
    },
    onError(err) {
      console.log(err)
    }
  })

  const now = new Date();

  const lastAppointment = appointments.findLast((appointment) => new Date(appointment.date) < now)?.date ?? 'None'
  const nextAppointment = appointments.find((appointment) => new Date(appointment.date) >= now)?.date ?? 'None'

  return (
    <Card className="space-y-4">
      <Flex>
        <Title>Last Appointment: {lastAppointment}</Title>
        <Title>Next Appointment: {nextAppointment}</Title>
      </Flex>
      <form className="space-y-4" onSubmit={(e) => {
        e.preventDefault()
        if (date) mutation.mutate(date.toDateString())
      }}>
        <DatePicker
          value={date}
          onValueChange={setDate}
        />

        <SubmitButton loading={mutation.isLoading}>Schedule Appointment</SubmitButton>
      </form>
    </Card>
  )
}