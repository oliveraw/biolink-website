import { useState, useEffect } from 'react'
<<<<<<< Updated upstream
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

import { Patient, PSAInput } from '@/API'
=======
import SubmitButton from "@/components/general/submit-button"
import TextInput from "@/components/general/text-input"
import { updatePatient } from "@/graphql/mutations"
import { useMutation } from "@tanstack/react-query"
import { Card, Title, Text, List, ListItem, DatePickerValue, DatePicker } from "@tremor/react"
import { API } from "aws-amplify"
import { useForm } from "react-hook-form"

import { Patient, PSA } from '@/API'

interface PsaData {
  score: number
}
>>>>>>> Stashed changes

export default function AddPsa({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
<<<<<<< Updated upstream
  const [psas, setPsas] = useState<PSAInput[]>([])

  useEffect(() => setPsas(patient.psas), [patient])

  const { register, formState: { errors }, handleSubmit } = useForm<PSAInput>()

  const createMut = useMutation<any, Error, PSAInput>({
    mutationFn: async (data) => {
      console.log([...psas, data].sort(compareDate))
      return await API.graphql({
        query: updatePatient,
        variables: {
          input: {
            id: patient.id,
            psas: [...psas, data].sort(compareDate),
          }
        }
      })
    },
    onSuccess(res) {
      setPsas(res.data.updatePatient.psas)
    },
  })

  const deleteMut = useMutation<any, Error, number>({
    mutationFn: async (index) => await API.graphql({
=======
  const [psas, setPsas] = useState<PSA[]>(patient.psas)
  const [date, setDate] = useState<DatePickerValue>(new Date())

  useEffect(() => {
    setPsas(patient.psas)
  }, [patient])

  const { register, handleSubmit } = useForm<PSA>()

  const mutation = useMutation<any, Error, PsaData>({
    mutationFn: async (psa) => await API.graphql({
>>>>>>> Stashed changes
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
<<<<<<< Updated upstream
          psas: psas.slice(0, index).concat(psas.slice(index + 1)),
=======
          psas: [...psas, {
            score: psa.score,
            date,
          }],
>>>>>>> Stashed changes
        }
      }
    }),
    onSuccess(res) {
      setPsas(res.data.updatePatient.psas)
<<<<<<< Updated upstream
=======
    },
    onError(err) {
      console.log(err)
>>>>>>> Stashed changes
    }
  })

  return (
    <>
<<<<<<< Updated upstream
      <Card className="space-y-4">
=======
      <Card className="space-y-2">
>>>>>>> Stashed changes
        <Title>PSA Tests</Title>

        <List>
          {psas.length ?
            psas.map((psa, index) => (
              <ListItem key={index}>
<<<<<<< Updated upstream
                <Text>{psa.score} ng/ml</Text>
                <Text>{psa.date}</Text>
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
            <Text>No PSA tests available</Text>
          }
        </List>

        {deleteMut.isError && <ErrorCallout error={deleteMut.error.message} />}

        {physician && (
          <form className="space-y-4" onSubmit={handleSubmit((data) => createMut.mutate(data))}>
            <TextInput
              type="number"
              register={register('score', {
                valueAsNumber: true,
                required: 'Score required',
              })}
              error={errors.score?.message}
=======
                <Text>{psa.date}: {psa.score} ng/ml</Text>
              </ListItem>
            ))
            :
            "No PSA tests available"
          }
        </List>

        {physician && (
          <form className="space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
            <TextInput
              type="float"
              register={register('score', {
                required: 'Score required',
              })}
>>>>>>> Stashed changes
            >
              Score
            </TextInput>

<<<<<<< Updated upstream
            <TextInput
              type="date"
              register={register('date', {
                required: 'Date required',
              })}
              error={errors.date?.message}
            >
              Date
            </TextInput>

            {createMut.isError && <ErrorCallout error={createMut.error.message} />}

            <SubmitButton loading={createMut.isLoading}>Add PSA Test</SubmitButton>
=======
            <DatePicker
              value={date}
              onValueChange={setDate}
            />

            <SubmitButton loading={mutation.isLoading}>Add PSA</SubmitButton>
>>>>>>> Stashed changes
          </form>
        )}
      </Card>
    </>
  )
}