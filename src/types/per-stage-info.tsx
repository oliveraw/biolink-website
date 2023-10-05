import { PipelineStage } from "@/API"

export const perStageInfo = [
    {
        stage: PipelineStage.CREATED,
        name: "Created",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.PSA1,
        name: "PSA 1",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.PSA2,
        name: "PSA 2",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.BIOMARKER,
        name: "ProstateDx",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.UROLOGIST,
        name: "Urologist",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.BIOPSY,
        name: "Biopsy",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.REPEAT_PSA,
        name: "Repeat PSA",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        stage: PipelineStage.OTHER,
        name: "Other",
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
]

export default perStageInfo