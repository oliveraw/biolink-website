import { API } from 'aws-amplify'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Card, Title } from '@tremor/react'

import { Stage, Status } from '@/API'
import { createPatient } from '@/graphql/mutations'

import TextInput from '@/components/general/text-input'
<<<<<<< Updated upstream
import PhoneInput from '@/components/general/phone-input'
import SelectInput from '@/components/general/select-input'
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'

import { CreatePatientInput } from '@/API'

import { nonEmptyValues } from '@/util/data'

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
=======
import SelectInput from '@/components/general/select-input'
import SubmitButton from '@/components/general/submit-button'

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
>>>>>>> Stashed changes

const races = [
  "Native American/Alaskan Native",
  "Asian/Pacific Islander",
  "Black/African American",
  "Hispanic/Latinx",
  "White/Caucasian",
  "Biracial or Multiracial",
  "Other",
]

const sexes = [
  "Male",
  "Female",
  "Other",
]

const conditions = [
  "N/A",
  "Cancer Stage 1",
  "Cancer Stage 2",
  "Cancer Stage 3",
  "Cancer Stage 4",
]

const treatments = [
  "N/A",
  "Surgery",
  "Radiation",
  "Androgen Deprivation",
]

export default function AddPatient() {
  const router = useRouter()

  const { register, formState: { errors }, control, handleSubmit } = useForm<CreatePatientInput>({
    defaultValues: {
      phone: '',
      race: '',
      sex: '',
      condition: '',
      treatments: [],
      stage: Stage.NOT_APPLICABLE,
      status: Status.NOT_APPLICABLE,
      psas: [],
      appointments: [],
      notes: [],
      languageCode: 'en',
      notify: true,
    }
  })

  const mutation = useMutation<any, Error, CreatePatientInput>({
    mutationFn: async (data) => await API.graphql({
      query: createPatient,
      variables: {
<<<<<<< Updated upstream
        input: data
=======
        input: {
          ...data,
          stage: Stage.NOT_APPLICABLE,
          status: Status.NOT_APPLICABLE,
          psas: [],
          appointments: [],
          notes: [],
          languageCode: "en",
          notify: true,
        }
>>>>>>> Stashed changes
      }
    }),
    onSuccess(res) {
      router.push(`/dashboard/patients/${res.data.createPatient.id}`)
    }
  })

  return (
    <Card className="space-y-4">
      <Title>Add Patient</Title>

      <form className="space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(nonEmptyValues(data)))}>
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
<<<<<<< Updated upstream
          error={errors.birthday?.message}
=======
>>>>>>> Stashed changes
        >
          Birthday
        </TextInput>

        <SelectInput
<<<<<<< Updated upstream
          name='race'
          control={control}
=======
          register={register('race')}
>>>>>>> Stashed changes
          options={races}
        >
          Race
        </SelectInput>

        <SelectInput
<<<<<<< Updated upstream
          name='sex'
          control={control}
=======
          register={register('sex')}
>>>>>>> Stashed changes
          options={sexes}
        >
          Sex
        </SelectInput>

        <SelectInput
<<<<<<< Updated upstream
          name='condition'
          control={control}
=======
          register={register('condition', {
            required: 'Cancer Stage required',
          })}
>>>>>>> Stashed changes
          options={conditions}
        >
          Condition
        </SelectInput>

        <SelectInput
<<<<<<< Updated upstream
          name='treatments'
          control={control}
          options={treatments}
          multiple
=======
          register={register('treatments', {
            required: 'Treatment required',
          })}
          options={treatments}
>>>>>>> Stashed changes
        >
          Treatments
        </SelectInput>

<<<<<<< Updated upstream
        {mutation.isError && <ErrorCallout error={mutation.error.message} />}

=======
>>>>>>> Stashed changes
        <SubmitButton loading={mutation.isLoading}>Add patient</SubmitButton>
      </form>
    </Card>
  )
}
