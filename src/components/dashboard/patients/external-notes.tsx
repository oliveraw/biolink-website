import { useState, useEffect } from 'react'
import SubmitButton from "@/components/general/submit-button"
import TextInput from "@/components/general/text-input"
import { updatePatient } from "@/graphql/mutations"
import { useMutation } from "@tanstack/react-query"
import { Card, Title, Text, List, ListItem } from "@tremor/react"
import { API } from "aws-amplify"
import { useForm } from "react-hook-form"

import Patient from '@/types/patient'

interface ExternalNotesData {
  notes: string
}

export default function ExternalNotes({
  patient
}: {
  patient: Patient
}) {

  const { register } = useForm<ExternalNotesData>()

  return (
    <>
      <Card className="space-y-2">
        <Title>External Notes</Title>

        {
            <TextInput
              type="string"
              register={register('notes', {
              })}
            >
              Enter Patient Notes
            </TextInput>
        }
      </Card>
    </>
  )
}