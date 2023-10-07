import { PipelineStage } from "@/API"

export const perStageInfo = [
    {
        stage: PipelineStage.CREATED,
        name: "Created",
        body: "The patient has been recorded in our system and is awaiting next steps."
    },
    {
        stage: PipelineStage.PSA1,
        name: "PSA 1",
        body: "The patient’s PSA level appears to be elevated above their age-specific threshold. The AUA guidelines recommend that the patient is re-screened for their PSA level in X months."
    },
    {
        stage: PipelineStage.PSA2,
        name: "PSA 2",
        body: "It looks like the patient's PSA level is still elevated above the threshold level of concern. The AUA guidelines recommend that a biomarker test be performed (serum, urine, tissue, etc.) to further identify clinically significant risk. Note: If the PSA is elevated above 10 ug/ml, a biomarker is unnecessary and the physician should proceed with a biopsy."
    },
    {
        stage: PipelineStage.UROLOGIST,
        name: "Urologist",
        body: "The patient's test results have remained above the threshold level of concern and the patient has been recommended for an appointment with a urologist."
    },
    {
        stage: PipelineStage.BIOMARKER,
        name: "pstateDx",
        body: "The patient’s PSA level remained elevated and the biomarker results were abnormal, further suggesting clinically significant prostate cancer. The AUA strongly recommends that the patient be scheduled for a biopsy. An MRI can be scheduled to determine the necessary type of biopsy performed (targeted v.s. systemic)"
    },
    {
        stage: PipelineStage.BIOPSY,
        name: "Biopsy",
        body: "After a consultation with a urologist, the patient may need to undergo a biopsy to determine the severity of their situation."
    },
    {
        stage: PipelineStage.REPEAT_PSA,
        name: "Repeat PSA",
        body: "The patient has been recommended for repeated PSA screening at an interval of X months."
    },
    {
        stage: PipelineStage.OTHER,
        name: "Other",
        body: ""
    },
]

export default perStageInfo