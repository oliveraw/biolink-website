import { useState, useEffect } from 'react'
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'
import TextInput from '@/components/general/text-input'
import { updatePatient } from '@/graphql/mutations'
import { useMutation } from '@tanstack/react-query'
import { Card, Title, Flex, Text, ListItem } from '@tremor/react'
import { API } from 'aws-amplify'
import { useForm } from 'react-hook-form'
import { compareDate, todaysDate } from '@/util/date'
import TruncatedText from '@/components/general/truncated-text'
import ScrollList from '@/components/general/scroll-list'
import DeleteItem from '@/components/general/delete-item'
import TextboxInput from '@/components/general/textbox-input'

import { Patient, Note, NoteInput } from '@/API'

const defaultValues = {
  date: todaysDate()
}

export default function AddNote({
  patient,
  patientView = false
}: {
  patient: Patient
  patientView?: boolean
}) {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => setNotes(patient.notes), [patient])

  const { register, formState: { errors }, handleSubmit, reset } = useForm<NoteInput>({ defaultValues })

  const createMut = useMutation<any, Error, NoteInput>({
    mutationFn: async (data) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          notes: [...notes, data].sort(compareDate),
        }
      }
    }),
    onSuccess(res) {
      setNotes(res.data.updatePatient.notes)
      reset()
    },
  })

  const deleteMut = useMutation<any, Error, number>({
    mutationFn: async (index) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          notes: notes.slice(0, index).concat(notes.slice(index + 1)),
        }
      }
    }),
    onSuccess(res) {
      setNotes(res.data.updatePatient.notes)
    }
  })

  return (
    <Card className="space-y-4">
      <Title>Notes</Title>

      {notes.length ?
        <ScrollList>
          {notes.map((note, index) => (
            <ListItem key={index} className="flex-col px-2 space-y-2 items-start">
              <Flex>
                <Text>{note.date}</Text>
                <DeleteItem mutation={deleteMut} index={index} />
              </Flex>
              <Text className="whitespace-pre-wrap">{note.content}</Text>
            </ListItem>
          ))}
        </ScrollList>
        :
        <Text>No Notes</Text>
      }

      {deleteMut.isError && <ErrorCallout error={deleteMut.error.message} />}

      {patientView &&
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
          
          <TextboxInput
            register={register('content', {
              required: 'Content required',
            })}
            error={errors.content?.message}
          >
            Content
          </TextboxInput>

          {createMut.isError && <ErrorCallout error={createMut.error.message} />}

          <SubmitButton loading={createMut.isLoading}>Add Note</SubmitButton>
        </form>
      }
    </Card>
  )
}