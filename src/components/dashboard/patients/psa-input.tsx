import { useState, useEffect } from 'react'
import SubmitButton from "@/components/general/submit-button"
import TextInput from "@/components/general/text-input"
import { updatePatient } from "@/graphql/mutations"
import { useMutation } from "@tanstack/react-query"
import { Card, Title, Text, List, ListItem, DatePickerValue, DatePicker } from "@tremor/react"
import { API } from "aws-amplify"
import { useForm } from "react-hook-form"

import { Patient } from '@/API'

interface PSAData {
  psaToAdd: string
  psaDateToAdd: string
}

// specific aws cron format is helpful for scheduling using lambda + eventbridge
// https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-cron-expressions.html
const MONTHS_LATER_TO_REMIND = 3
function getReminderCronString(date: any) {
  if (date instanceof Date) {
    const reminderDate = new Date(date)
    reminderDate.setMonth(reminderDate.getMonth() + MONTHS_LATER_TO_REMIND)
    const minutes = reminderDate.getMinutes()
    const hours = reminderDate.getHours()
    const days = reminderDate.getDate()
    const months = reminderDate.getMonth() + 1
    const dayOfWeek = reminderDate.getDay()
    const year = reminderDate.getFullYear()
  
    return `${minutes} ${hours} ${days} ${months} ${dayOfWeek} ${year}`;
  }
  else {
    throw TypeError
  }
}

export default function PsaInput({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
  const [scores, setScores] = useState<number[]>(patient.psas)
  const [visits, setVisits] = useState<string[]>(patient.psaDates)
  const [date, setDate] = useState<DatePickerValue>(new Date())

  useEffect(() => {
    setScores(patient.psas)
    setVisits(patient.psaDates)
  }, [patient])

  const { register, handleSubmit } = useForm<PSAData>()

  const mutation = useMutation<any, Error, PSAData>({
    mutationFn: async (data) => {
      const reminderDate = getReminderCronString(date)
      console.log("reminder date", reminderDate)

      return await API.graphql({
        query: updatePatient,
        variables: {
          input: {
            id: patient.id,
            psas: [...scores, data.psaToAdd],
            psaDates: [...visits, date],
            psaReminderDates: [...patient.psaReminderDates, reminderDate]
          }
        }
      })
    },
    onSuccess(res) {
      console.log(res)
      setScores(res.data.updatePatient.psas)
      setVisits(res.data.updatePatient.psaDates)
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
                <Text>{psa} ng/ml, recorded: {visits[idx]}</Text>
              </ListItem>
            ))
            :
            "No scores available"
          }
        </List>

        {physician && (
          <form className="space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
            <TextInput
              type="float"
              register={register('psaToAdd', {
                required: 'PSA Score required',
              })}
            >
              PSA Score
            </TextInput>

            <DatePicker
              value={date}
              onValueChange={setDate}
            />

            <SubmitButton loading={mutation.isLoading}>Add PSA Score</SubmitButton>
          </form>
        )}
      </Card>
    </>
  )
}