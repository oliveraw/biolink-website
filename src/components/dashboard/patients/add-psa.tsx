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

import { Patient, PSA, PSAInput } from '@/API'

const defaultValues = {
  date: todaysDate()
}

export default function AddPsa({
  patient,
  patientView = false
}: {
  patient: Patient
  patientView?: boolean
}) {
  const [psas, setPsas] = useState<PSA[]>([])

  useEffect(() => setPsas(patient.psas), [patient])

  const { register, formState: { errors }, handleSubmit, reset } = useForm<PSAInput>({ defaultValues })

  const createMut = useMutation<any, Error, PSAInput>({
    mutationFn: async (data) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          psas: [...psas, data].sort(compareDate),
        }
      }
    }),
    onSuccess(res) {
      setPsas(res.data.updatePatient.psas)
      reset()
    },
  })

  const deleteMut = useMutation<any, Error, number>({
    mutationFn: async (index) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          psas: psas.slice(0, index).concat(psas.slice(index + 1)),
        }
      }
    }),
    onSuccess(res) {
      setPsas(res.data.updatePatient.psas)
    }
  })

  return (
    <Card className="space-y-4">
      <Title>PSA Tests</Title>

      {psas.length ?
        <ScrollList>
          {psas.map((psa, index) => (
            <ListItem key={index} className="px-2">
              <Text>{psa.date}</Text>
              <TruncatedText>{psa.score} ng/ml</TruncatedText>
              <DeleteItem mutation={deleteMut} index={index} />
            </ListItem>
          ))}
        </ScrollList>
        :
        <Text>No PSA tests</Text>
      }

      {deleteMut.isError && <ErrorCallout error={deleteMut.error.message} />}

      {!patientView &&
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
            type="number"
            register={register('score', {
              valueAsNumber: true,
              required: 'Score required',
            })}
            error={errors.score?.message}
          >
            Score
          </TextInput>

          {createMut.isError && <ErrorCallout error={createMut.error.message} />}

          <SubmitButton loading={createMut.isLoading}>Add PSA Test</SubmitButton>
        </form>
      }
    </Card>
  )
}