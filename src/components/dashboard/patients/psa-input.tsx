import { useState, useEffect } from 'react'
import SubmitButton from "@/components/general/submit-button"
import TextInput from "@/components/general/text-input"
import { updatePatient } from "@/graphql/mutations"
import { useMutation } from "@tanstack/react-query"
import { Card, Title, Text, List, ListItem } from "@tremor/react"
import { API } from "aws-amplify"
import { useForm } from "react-hook-form"

import Patient from '@/types/patient'

interface PSAData {
  psaToAdd: string
}

export default function PsaInput({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
  const [scores, setScores] = useState<number[]>(patient.psas)

  useEffect(() => {
    setScores(patient.psas)
  }, [patient])

  const { register, handleSubmit } = useForm<PSAData>()

  const mutation = useMutation<any, Error, PSAData>({
    mutationFn: async (data) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          psas: [...scores, data.psaToAdd],
        }
      }
    }),
    onSuccess(res) {
      console.log(res)
      setScores(res.data.updatePatient.psas)
    },
    onError(err) {
      console.log(err)
    }
  })
  return (
    <>
      <Card className="space-y-2">
        <Title>PSA Scores</Title>

        <List>
          {scores.length ?
            scores.map((psa, idx) => (
              <ListItem key={idx}>
                <Text>{psa} ng/ml</Text>
              </ListItem>
            ))
            :
            "No scores available"
          }
        </List>

        {physician && (
          <form className="space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
            <TextInput
              type="number"
              register={register('psaToAdd', {
                required: 'PSA Score required',
              })}
            >
              PSA Score
            </TextInput>

            <SubmitButton loading={mutation.isLoading}>Add PSA Score</SubmitButton>
          </form>
        )}
      </Card>
    </>
  )
}