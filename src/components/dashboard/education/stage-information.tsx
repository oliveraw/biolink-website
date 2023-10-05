import perStageInfo from "@/types/per-stage-info";
import { Accordion, AccordionBody, AccordionHeader, AccordionList, Card, Title } from "@tremor/react";

export default function StageInformationAccordion() {
    return (
        <>
            <Card>
                <Title>Learn About the Pipeline Stages</Title>
                <AccordionList className="mt-4">
                    {perStageInfo.map((item) => (
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