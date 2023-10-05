import { PipelineStage } from "@/API";
import { Accordion, AccordionBody, AccordionHeader, AccordionList, Card, Title } from "@tremor/react";

export const patientStageBlurbs = [
    {
        name: PipelineStage.CREATED,
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        name: PipelineStage.PSA1,
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
    {
        name: PipelineStage.PSA2,
        body: "The patient's initial PSA indicated that they may be at risk..."
    },
    {
        name: PipelineStage.BIOMARKER,
        body: "The patient's initial PSA indicated that they may be at risk..."
    },
    {
        name: PipelineStage.UROLOGIST,
        body: "The patient's initial PSA indicated that they may be at risk..."
    },
    {
        name: PipelineStage.BIOPSY,
        body: "The patient's initial PSA indicated that they may be at risk..."
    },
    {
        name: PipelineStage.REPEAT_PSA,
        body: "The patient's initial PSA indicated that they may be at risk..."
    },
    {
        name: PipelineStage.OTHER,
        body: "The patient has been recommended for an initial PSA screening. According to X guidelines this is recommended for all people in Y group over Z age..."
    },
]

export default function StageInformationAccordion() {
    return (
        <>
            <Card>
                <Title>Learn About the Pipeline Stages</Title>
                <AccordionList className="mt-4">
                    {patientStageBlurbs.map((item) => (
                        <Accordion>
                            <AccordionHeader>{item.name}</AccordionHeader>
                            <AccordionBody>{item.body}</AccordionBody>
                        </Accordion>
                    ))}
                </AccordionList>
            </Card>
        </>
    )
}