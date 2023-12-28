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
import ErrorCallout from '@/components/general/error-callout'
import { Patient } from '@/API'

import { updatePatient } from '@/graphql/mutations'

import stageInfo from '@/info/stages'

export default function SelectStage({
  patient,
  patientView = false
}: {
  patient: Patient
  patientView?: boolean
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
      setStage(res.data.updatePatient.stage)
    },
  })

  const stageIndex = Object.keys(stageInfo).indexOf(stage)

  return (
    <Card>
      <TabGroup
        index={stageIndex}
        onIndexChange={(index) => !patientView && mutation.mutate(Object.keys(stageInfo)[index])}
        className="space-y-4"
      >
        <TabPanels>
          {Object.entries(stageInfo).map(([key, stage]) => (
            <TabPanel key={key} className="space-y-4">
              <Title>Stage: {stage.name}</Title>
              <Text>{stage.description}</Text>
            </TabPanel>
          ))}
        </TabPanels>
        
        <>{mutation.isError && <ErrorCallout error={mutation.error.message} />}</>
        
        <TabList variant="solid" className="flex space-x-0">
          {Object.entries(stageInfo).map(([key, stage]) => (
            <Tab key={key} className="grow justify-center">{stage.name}</Tab>
          ))}
        </TabList>
      </TabGroup>
    </Card>
  )
}