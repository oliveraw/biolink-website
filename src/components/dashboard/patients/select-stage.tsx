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

import { updatePatient } from '@/graphql/mutations';

import perStageInfo from '@/types/per-stage-info'

export default function StageSelect({
  patient,
  physician = true
}: {
  patient: Patient
  physician?: boolean
}) {
  const [stage, setStage] = useState<string>(patient.pipelineStage)

  useEffect(() => {
    setStage(patient.pipelineStage)
  }, [patient])

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (stage) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          pipelineStage: stage
        }
      }
    }),
    onSuccess(res) {
      console.log(res)
      setStage(res.data.updatePatient.pipelineStage)
    },
    onError(err) {
      console.log(err)
    }
  })

  const stageIndex = perStageInfo.findIndex((item) => item.pipelineStage == stage)

  return (
    <Card>
      <TabGroup index={stageIndex} onIndexChange={(idx) => physician && mutation.mutate(perStageInfo[idx].pipelineStage)}>
        <TabList variant="solid" className="flex space-x-0">
          {perStageInfo.map((item) => (
            <Tab key={item.pipelineStage} className="grow justify-center">{item.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {perStageInfo.map((item) => (
            <TabPanel key={item.pipelineStage}>
              <Title>Stage: {item.name}</Title>
              <Text>{item.body}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Card>
  )
}