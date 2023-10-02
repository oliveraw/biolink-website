import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Card, Title } from '@tremor/react'

import { PatientStatus, PipelineStage } from '@/API'
import { createPatient } from '@/graphql/mutations';

import TextInput from '@/components/auth/text-input'
import SubmitButton from '@/components/auth/submit-button'

interface PatientData {
  name: string
  phone: string
  email: string
  birthday: string
  sex: string
  race: string
}

export default function AddPatient() {
  const router = useRouter()

  const { register, handleSubmit } = useForm<PatientData>()

  const mutation = useMutation<any, Error, PatientData>({
    mutationFn: async (data) => await API.graphql({
      query: createPatient,
      variables: {
        input: {
          ...data,
          psas: [],
          biomarker: "ProstateDx",
          stage: PipelineStage.CREATED,
          status: PatientStatus.WAITING,
          visitDates: [],
        }
      }
    }),
    onSuccess(res) {
      router.push(`/dashboard/patients/${res.data.createPatient.id}`)
    },
    onError(err) {
      console.log(err)
    }
  })

  return (
    <Card>
      <Title>Add Patient</Title>
      
      <form className="mt-4 space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
          <TextInput
            type="text"
            register={register('name', {
              required: 'Name required',
            })}
          >
            Name
          </TextInput>

          <TextInput
            type="tel"
            register={register('phone', {
              required: 'Phone number required',
            })}
          >
            Phone number
          </TextInput>

          <TextInput
            type="email"
            register={register('email', {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address'
              }
            })}
          >
            Email address
          </TextInput>

          <TextInput
            type="date"
            register={register('birthday', {
              required: 'Birthday required',
            })}
          >
            Birthday
          </TextInput>

          <TextInput
            type="text"
            register={register('sex', {
              required: 'Sex required',
            })}
          >
            Sex
          </TextInput>

          <TextInput
            type="text"
            register={register('race', {
              required: 'Race required',
            })}
          >
            Race
          </TextInput>

          <SubmitButton>Add patient</SubmitButton>
      </form>
    </Card>
  )
}
