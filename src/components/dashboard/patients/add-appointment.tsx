import { useState, useEffect } from 'react'
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'
import TextInput from '@/components/general/text-input'
import { updatePatient } from '@/graphql/mutations'
import { useMutation } from '@tanstack/react-query'
import { Card, Title, Text, ListItem } from '@tremor/react'
import { API } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { compareDate, todaysDate } from '@/util/date'
import TruncatedText from '@/components/general/truncated-text'
import ScrollList from '@/components/general/scroll-list'
import DeleteItem from '@/components/general/delete-item'

import { Patient, Appointment, AppointmentInput } from '@/API'

const defaultValues = {
  date: todaysDate()
}

export default function AddAppointment({
  patient
}: {
  patient: Patient
}) {
  const [appointments, setAppointments] = useState<Appointment[]>([])

  useEffect(() => setAppointments(patient.appointments), [patient])

  const { register, formState: { errors }, handleSubmit, reset } = useForm<AppointmentInput>({ defaultValues })

  const createMut = useMutation<any, Error, AppointmentInput>({
    mutationFn: async (data) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          appointments: [...appointments, data].sort(compareDate),
        }
      }
    }),
    onSuccess(res) {
      setAppointments(res.data.updatePatient.appointments)
      reset()
    },
  })

  const deleteMut = useMutation<any, Error, number>({
    mutationFn: async (index) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          appointments: appointments.slice(0, index).concat(appointments.slice(index + 1)),
        }
      }
    }),
    onSuccess(res) {
      setAppointments(res.data.updatePatient.appointments)
    }
  })

  return (
    <Card className="space-y-4">
      <Title>Appointments</Title>

      {appointments.length ?
        <ScrollList>
          {appointments.map((appointment, index) => (
            <ListItem key={index} className="px-2">
              <Text>{appointment.date}</Text>
              <TruncatedText>{appointment.description}</TruncatedText>
              <DeleteItem mutation={deleteMut} index={index} />
            </ListItem>
          ))}
        </ScrollList>
        :
        <Text>No Appointments</Text>
      }

      {deleteMut.isError && <ErrorCallout error={deleteMut.error.message} />}

      <form className="space-y-4" onSubmit={handleSubmit((data) => createMut.mutate(data))}>
        <TextInput
          type="date"
          register={register('date', {
            required: 'Date required',
          })}
          error={errors.date?.message}
        >
          Date
        </TextInput>

        <TextInput
          register={register('description')}
          error={errors.description?.message}
        >
          Description
        </TextInput>

        {createMut.isError && <ErrorCallout error={createMut.error.message} />}

        <SubmitButton loading={createMut.isLoading}>Add Appointment</SubmitButton>
      </form>
    </Card>
  )
}