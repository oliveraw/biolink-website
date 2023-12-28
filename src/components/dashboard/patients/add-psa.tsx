import { useState, useEffect } from 'react'
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'
import TextInput from '@/components/general/text-input'
import { updatePatient } from '@/graphql/mutations'
import { useMutation } from '@tanstack/react-query'
import { Card, Title, Text, List, ListItem, Button } from '@tremor/react'
import { API } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { TrashIcon } from '@heroicons/react/24/outline'
import { compareDate } from '@/util/sort'
import TruncatedText from '@/components/general/truncated-text'

import { Patient, PSA, PSAInput } from '@/API'

export default function AddPsa({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
  const [psas, setPsas] = useState<PSA[]>([])

  useEffect(() => setPsas(patient.psas), [patient])

  const { register, formState: { errors }, handleSubmit } = useForm<PSAInput>()

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

      <List>
        {psas.length ?
          psas.map((psa, index) => (
            <ListItem key={index}>
              <TruncatedText>{psa.date}</TruncatedText>
              <TruncatedText>{psa.score} ng/ml</TruncatedText>
              <Button
                size="xs"
                variant="light"
                color="rose"
                icon={TrashIcon}
                onClick={() => deleteMut.mutate(index)}
              />
            </ListItem>
          ))
          :
          <Text>No PSA tests</Text>
        }
      </List>

      {deleteMut.isError && <ErrorCallout error={deleteMut.error.message} />}

      {physician && (
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
      )}
    </Card>
  )
}