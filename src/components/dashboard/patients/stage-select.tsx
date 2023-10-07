import { useState } from 'react'
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
  patient
}: {
  patient: Patient
}) {
  const [stage, setStage] = useState<string>(patient.stage)

  const mutation = useMutation<any, Error, string>({
    mutationFn: async (stage) => await API.graphql({
      query: updatePatient,
      variables: {
        input: {
          id: patient.id,
          stage
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

  const stageIndex = perStageInfo.findIndex((item) => item.stage == stage)
  
  return (
    <Card>
      <TabGroup index={stageIndex} onIndexChange={(idx) => mutation.mutate(perStageInfo[idx].stage)}>
        <TabList variant="solid" className="flex space-x-0">
          {perStageInfo.map((item) => (
            <Tab key={item.stage} className="grow justify-center">{item.name}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {perStageInfo.map((item) => (
            <TabPanel key={item.stage}>
              <Title>Stage: {item.name}</Title>
              <Text>{item.body}</Text>
            </TabPanel>
          ))}
        </TabPanels>
      </TabGroup>
    </Card>
  )
}