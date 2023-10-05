import { PipelineStage } from "@/API";
import Patient from "@/types/patient";
import { perStageInfo } from "@/types/per-stage-info";
import { Card, Title, Text } from "@tremor/react";

export default function PatientsStageBlurb({
    patient
}: {
    patient: Patient
}) {
    const curStage: number = Object.keys(PipelineStage).indexOf(patient.stage)
    return (
        <>
            <Card className="w-full bg-green-800">
                <Title className="text-white">{perStageInfo[curStage].name}</Title>
                <Text className="text-slate-200">{perStageInfo[curStage].blurb}</Text>
            </Card>
        </>
    )
}