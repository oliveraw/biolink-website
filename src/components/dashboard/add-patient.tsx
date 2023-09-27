import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Card, Title } from '@tremor/react'

import TextInput from '@/components/auth/text-input'
import SubmitButton from '@/components/auth/submit-button'

interface PatientData {
  name: string
  email: string
  phone: string
}

export default function AddPatient() {
  const { register, handleSubmit } = useForm<PatientData>()

  const mutation = useMutation<any, Error, PatientData>({
    mutationFn: (data) => new Promise((resolve, reject) => {
      resolve('something');
    }),
    onSuccess(data) {
      console.log(data)
    },
    onError(error) {
      console.log(error)
    }
  })

  return (
    <Card>
      <Title>Add Patient</Title>
      
      <form className="space-y-6" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
          <TextInput
            type="text"
            register={register('name', {
              required: 'Name required',
            })}
          >
            Name
          </TextInput>

          <TextInput
            type="email"
            register={register('email', {
              required: 'Email address required',
              pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
              }
            })}
          >
            Email address
          </TextInput>

          <TextInput
            type="tel"
            register={register('phone', {
              required: 'Phone number required',
            })}
          >
            Phone number
          </TextInput>

          <SubmitButton>Add patient</SubmitButton>
      </form>
    </Card>
  )
}
