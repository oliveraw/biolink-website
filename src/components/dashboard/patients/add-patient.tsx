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
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'

import { CreatePatientInput } from '@/API'

import { nonEmptyValues } from '@/util/data'
import stageInfo from '@/info/stages'

const races = [
  'Native American/Alaskan Native',
  'Asian/Pacific Islander',
  'Black/African American',
  'Hispanic/Latino',
  'White/Caucasian',
  'Biracial/Multiracial',
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
  'Other',
]

const stages = Object.values(Stage)
const stageNames = Object.fromEntries(Object.entries(stageInfo).map(([key, value]) => [key, value.name]))

const defaultValues = {
  name: '',
  phone: '',
  email: '',
  birthday: '',
  sex: '',
  race: '',
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

export default function AddPatient() {
  const router = useRouter()

  const { register, formState: { errors }, control, handleSubmit, reset } = useForm<CreatePatientInput>({ defaultValues })

  const mutation = useMutation<any, Error, CreatePatientInput>({
    mutationFn: async (data) => await API.graphql({
      query: createPatient,
      variables: {
        input: nonEmptyValues(data)
      }
    }),
    onSuccess(res) {
      router.push(`/dashboard/patients/${res.data.createPatient.id}`)
      // reset()
    }
  })

  return (
    <Card className="space-y-4">
      <Title>Add Patient</Title>

      <form className="space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
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
          register={register('birthday', {
            required: 'Birthday required',
          })}
          error={errors.birthday?.message}
        >
          Birthday
        </TextInput>

        <SelectInput
          name='sex'
          control={control}
          options={sexes}
        >
          Sex
        </SelectInput>

        <SelectInput
          name='race'
          control={control}
          options={races}
        >
          Race
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

        <SelectInput
          name='stage'
          control={control}
          rules={{
            required: 'Stage required',
          }}
          options={stages}
          names={stageNames}
        >
          Stage
        </SelectInput>

        {mutation.isError && <ErrorCallout error={mutation.error.message} />}

        <SubmitButton loading={mutation.isLoading}>Add Patient</SubmitButton>
      </form>
    </Card>
  )
}
