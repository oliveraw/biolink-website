import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Card, Title } from '@tremor/react'

import { Stage, Status } from '@/API'
import { createPatient } from '@/graphql/mutations'

import TextInput from '@/components/general/text-input'
import PhoneInput from '@/components/general/phone-input'
import SelectInput from '@/components/general/select-input'
import SubmitButton from '@/components/general/submit-button'

import { nonEmpty } from '@/util/data'

interface PatientData {
  name: string
  phone: string
  email: string
  birthday: string
  sex: string
  race: string
  condition: string
  treatments: string[]
}

const races = [
  'Native American/Alaskan Native',
  'Asian/Pacific Islander',
  'Black/African American',
  'Hispanic/Latinx',
  'White/Caucasian',
  'Biracial or Multiracial',
  'Other',
]

const sexes = [
  'Male',
  'Female',
  'Other',
]

const conditions = [
  'N/A',
  'Cancer Stage 1',
  'Cancer Stage 2',
  'Cancer Stage 3',
  'Cancer Stage 4',
]

const treatments = [
  'Surgery',
  'Radiation',
  'Androgen Deprivation',
]

export default function AddPatient() {
  const router = useRouter()

  const { register, formState: { errors }, control, handleSubmit } = useForm<PatientData>({
    defaultValues: {
      phone: '',
      race: '',
      sex: '',
      condition: '',
      treatments: [],
    }
  })

  const mutation = useMutation<any, Error, PatientData>({
    mutationFn: async (data) => await API.graphql({
      query: createPatient,
      variables: {
        input: {
          ...data,
          stage: Stage.NOT_APPLICABLE,
          status: Status.NOT_APPLICABLE,
          psas: [],
          appointments: [],
          notes: [],
          languageCode: 'en',
          notify: true,
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
    <Card className="space-y-4">
      <Title>Add Patient</Title>

      <form className="space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(nonEmpty(data)))}>
        <TextInput
          type="text"
          register={register('name', {
            required: 'Name required',
          })}
          error={errors.name?.message}
        >
          Name
        </TextInput>

        <PhoneInput
          name='phone'
          control={control}
          rules={{
            required: 'Phone number required',
          }}
        >
          Phone number
        </PhoneInput>

        <TextInput
          type="email"
          register={register('email', {
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            },
          })}
          error={errors.email?.message}
        >
          Email address
        </TextInput>

        <TextInput
          type="date"
          register={register('birthday')}
          error={errors.birthday?.message}
        >
          Birthday
        </TextInput>

        <SelectInput
          name='race'
          control={control}
          options={races}
        >
          Race
        </SelectInput>

        <SelectInput
          name='sex'
          control={control}
          options={sexes}
        >
          Sex
        </SelectInput>

        <SelectInput
          name='condition'
          control={control}
          options={conditions}
        >
          Condition
        </SelectInput>

        <SelectInput
          name='treatments'
          control={control}
          options={treatments}
          multiple
        >
          Treatments
        </SelectInput>

        <SubmitButton loading={mutation.isLoading}>Add patient</SubmitButton>
      </form>
    </Card>
  )
}
