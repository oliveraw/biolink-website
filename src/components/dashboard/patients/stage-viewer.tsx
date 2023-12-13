import { PipelineStage } from "@/API"
import { Patient } from '@/API'
import perStageInfo from "@/types/per-stage-info"
import { Card, Title, Text } from "@tremor/react"
import { EducationCard } from "@/components/dashboard/education/articles"

// keeping to show view only on the patient side

export default function PatientStageTracker({
  patient
}: {
  patient: Patient
}) {
  const curStage: number = Object.keys(PipelineStage).indexOf(patient.pipelineStage)
  return (
    <Card className="bg-indigo-900 flex flex-col gap-y-4">
      {/* does not look good on small screens */}
      <div className="flex justify-center gap-x-1">
        {perStageInfo.map(function (item, idx) {
          const color = idx <= curStage ? " bg-green-800 " : " bg-green-600 "
          return (
            <div
              className={"p-4 text-white text-sm" + color + (idx === 0 ? " rounded-l-full " : "") + (idx === perStageInfo.length - 1 ? "rounded-r-full" : "")}
              key={"stage-" + idx}
            >
              {item.name}
            </div>
          )
        })}
      </div>
      <div className="flex flex-col gap-y-4">
        <Title className="text-white">{perStageInfo[curStage].name}</Title>
        <Text className="text-slate-200">{perStageInfo[curStage].body}</Text>
        {perStageInfo[curStage].info && <EducationCard info={perStageInfo[curStage].info!} />}
      </div>
    </Card>
  )
}