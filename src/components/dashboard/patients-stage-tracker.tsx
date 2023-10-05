import { PipelineStage } from "@/API"
import Patient from "@/types/patient"
import perStageInfo from "@/types/per-stage-info"


export default function PatientStageTracker({
    patient
}: {
    patient: Patient
}) {
    const curStage: number = Object.keys(PipelineStage).indexOf(patient.stage)
    return (
        <>
            <div className="flex justify-center gap-x-1">
                {perStageInfo.map(function (item, idx) {
                    const color = idx <= curStage ? " bg-green-800 " : " bg-green-600 "
                    return (
                        <div className={"p-4 text-white" + color + (idx === 0 ? " rounded-l-full " : "") + (idx === perStageInfo.length-1 ? "rounded-r-full" : "")}>
                            {item.name}
                        </div>
                    )
                })}
            </div>
        </>
    )
}