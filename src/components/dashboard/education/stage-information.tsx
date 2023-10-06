import { Accordion, AccordionBody, AccordionHeader, AccordionList, Card, Title } from "@tremor/react";

const info = [
    {
        name: "Prostate Cancer Overview",
        body: "Prostate cancer is one of the most frequently detected cancers in males, comprising approximately 1.4 million cases worldwide. It is the second most commonly diagnosed malignancy and the fifth leading cause of cancer-related deaths in men. One in eight men is estimated to develop prostate cancer during his lifetime. However, due to the usually indolent course of the disease, the mortality rate is only 1 in 41 diagnosed men.",
    },
    {
        name: "PSA Testing",
        body: "When screening for prostate cancer, clinicians should use PSA as the first screening test. For people with a newly elevated PSA, clinicians should repeat the PSA prior to a secondary biomarker, imaging, or biopsy. Clinicians may begin prostate cancer screening and offer a baseline PSA test to people between ages 45 to 50 years.",
    },
    {
        name: "Biomarker Testing",
        body: "One of the best ways to screen, diagnose, stage, assess therapeutic response, and predict prostate cancer is to use various biomarkers in the serum or urine. According to the National Cancer Institute (NCI), a biomarker is a biological molecule detected in blood, urine, other body fluids, or tissues. It is a marker of an unhealthy process, condition, or disease."
    },
    {
        name: "Urologist",
        body: "",
    },
    {
        name: "Biopsy",
        body: "",
    },
]

export default function StageInformationAccordion() {
    return (
        <>
            <Card>
                <Title>Learn About the Pipeline Stages</Title>
                <AccordionList className="mt-4">
                    {info.map((item, idx) => (
                        <Accordion key={idx}>
                            <AccordionHeader>{item.name}</AccordionHeader>
                            <AccordionBody>{item.body}</AccordionBody>
                        </Accordion>
                    ))}
                </AccordionList>
            </Card>
        </>
    )
}