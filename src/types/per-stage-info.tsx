import { PipelineStage } from "@/API"

// the articles are duplicated from EducationalArticles component
export const perStageInfo = [
    {
        stage: PipelineStage.CREATED,
        name: "Created",
        body: "The patient has been recorded in our system and is awaiting next steps."
    },
    {
        stage: PipelineStage.PSA1,
        name: "PSA",
        body: "The patient’s PSA level appears to be elevated above their age-specific threshold. The AUA guidelines recommend that the patient is re-screened for their PSA level in X months.",
        info: {
            url: "https://www.auajournals.org/doi/10.1097/JU.0000000000003491",
            title: "Early Detection of Prostate Cancer: Prostate Cancer Screening (AUA)",
            body: "Learn more about the PSA score, the primary method for early prostate cancer detection."
        },
    },
    {
        stage: PipelineStage.PSA2,
        name: "Repeat PSA",
        body: "It looks like the patient's PSA level is still elevated above the threshold level of concern. The AUA guidelines recommend that a biomarker test be performed (serum, urine, tissue, etc.) to further identify clinically significant risk. Note: If the PSA is elevated above 10 ug/ml, a biomarker is unnecessary and the physician should proceed with a biopsy.",
    },
    {
        stage: PipelineStage.UROLOGIST,
        name: "Urologist",
        body: "The patient's test results have remained above the threshold level of concern and the patient has been recommended for an appointment with a urologist."
    },
    {
        stage: PipelineStage.BIOMARKER,
        name: "ProstateDx",
        body: "The patient’s PSA level remained elevated and the biomarker results were abnormal, further suggesting clinically significant prostate cancer. The AUA strongly recommends that the patient be scheduled for a biopsy. An MRI can be scheduled to determine the necessary type of biopsy performed (targeted v.s. systemic)",
        info: {
            url: "https://www.ncbi.nlm.nih.gov/books/NBK592381/",
            title: "Biomarker Assays for Elevated PSA Risk Analysis (NIH)",
            body: "Learn more about the use of biomarkers after a second elevated psa score."
        },
    },
    {
        stage: PipelineStage.BIOPSY,
        name: "Biopsy",
        body: "After a consultation with a urologist, the patient may need to undergo a biopsy to determine the severity of their situation."
    },
    {
        stage: PipelineStage.REPEAT_PSA,
        name: "Active Surveillance",
        body: "The patient has been recommended for repeated PSA screening at an interval of X months.",
        info: {
            url: "https://www.hopkinsmedicine.org/health/conditions-and-diseases/prostate-cancer/active-surveillance-for-prostate-cancer",
            title: "Active Surveillance for Prostate Cancer (JHU)",
            body: "Useful information for patients who are meeting with a urologist or have been diagnosed with prostate cancer."
        },
    },
    {
        stage: PipelineStage.OTHER,
        name: "Other",
        body: ""
    },
]

export default perStageInfo