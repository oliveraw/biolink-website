import { useState, useEffect } from 'react'
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

export default function AddPsa({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
  const [psas, setPsas] = useState<PSA[]>(patient.psas)
  const [date, setDate] = useState<DatePickerValue>(new Date())

  useEffect(() => {
    setPsas(patient.psas)
  }, [patient])

  const { register, handleSubmit } = useForm<PSA>()

  const mutation = useMutation<any, Error, PsaData>({
    mutationFn: async (psa) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          psas: [...psas, {
            score: psa.score,
            date,
          }],
        }
      }
    }),
    onSuccess(res) {
      setPsas(res.data.updatePatient.psas)
    },
    onError(err) {
      console.log(err)
    }
  })

  return (
    <>
      <Card className="space-y-2">
        <Title>PSA Tests</Title>

        <List>
          {psas.length ?
            psas.map((psa, index) => (
              <ListItem key={index}>
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
            >
              Score
            </TextInput>

            <DatePicker
              value={date}
              onValueChange={setDate}
            />

            <SubmitButton loading={mutation.isLoading}>Add PSA</SubmitButton>
          </form>
        )}
      </Card>
    </>
  )
}