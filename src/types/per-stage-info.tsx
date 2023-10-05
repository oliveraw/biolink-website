import { PipelineStage } from "@/API"

export const perStageInfo = [
    {
        enum: PipelineStage.CREATED,
        name: "Created",
        blurb: "asdf",
    },
    {
        enum: PipelineStage.PSA1,
        name: "PSA 1",
        blurb: "asdf",
    },
    {
        enum: PipelineStage.PSA2,
        name: "PSA 2",
        blurb: "asdf",
    },
    {
        enum: PipelineStage.BIOMARKER,
        name: "ProstateDx",
        blurb: "asdf",
    },
    {
        enum: PipelineStage.UROLOGIST,
        name: "Urologist",
        blurb: "asdf",
    },
    {
        enum: PipelineStage.BIOPSY,
        name: "Biopsy",
        blurb: "asdf",
    },
    {
        enum: PipelineStage.REPEAT_PSA,
        name: "Repeat PSA",
        blurb: "asdf",
    },
]

export default perStageInfo