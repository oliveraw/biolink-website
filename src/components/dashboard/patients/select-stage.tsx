import { useState, useEffect } from 'react'
import { API } from 'aws-amplify'
import { useMutation } from '@tanstack/react-query'
import {
  Card,
  Title,
  Text,
  TabList,
  Tab,
  TabGroup,
  TabPanels,
  TabPanel
} from '@tremor/react'

import { Patient } from '@/API'

import { updatePatient } from '@/graphql/mutations'

import stageInfo from '@/info/stages'

export default function SelectStage({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
  const [stage, setStage] = useState<string>(patient.stage)

  useEffect(() => {
    setStage(patient.stage)
  }, [patient])

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (stage) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          stage,
        }
      }
    }),
    onSuccess(res) {
      console.log(res)
      setStage(res.data.updatePatient.stage)
    },
    onError(err) {
      console.log(err)
    }
  })

  const stageIndex = Object.keys(stageInfo).indexOf(stage)

  return (
    <Card>
      <TabGroup index={stageIndex} onIndexChange={(index) => physician && mutation.mutate(Object.keys(stageInfo)[index])}>
        <TabList variant="solid" className="flex space-x-0">
          {Object.entries(stageInfo).map(([key, stage]) => (
            <Tab key={key} className="grow justify-center">{stage.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {Object.entries(stageInfo).map(([key, stage]) => (
            <TabPanel key={key}>
              <Title>Stage: {stage.name}</Title>
              <Text>{stage.description}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Card>
  )
}