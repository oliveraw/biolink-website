import { Stage } from "@/API"

const stages = {
    [Stage.NOT_APPLICABLE]: {
        name: "N/A",
        description: "Patient's stage has not been set",
    },
    [Stage.INITIAL_PSA]: {
        name: "Initial PSA",
        description: "The patient’s PSA level appears to be elevated above their age-specific threshold. The AUA guidelines recommend that the patient is re-screened for their PSA level in X months.",
    },
    [Stage.REPEAT_PSA]: {
        name: "Repeat PSA",
        description: "It looks like the patient's PSA level is still elevated above the threshold level of concern. The AUA guidelines recommend that a biomarker test be performed (serum, urine, tissue, etc.) to further identify clinically significant risk. Note: If the PSA is elevated above 10 ug/ml, a biomarker is unnecessary and the physician should proceed with a biopsy.",
    },
    [Stage.SURVEILLANCE]: {
        name: "Surveillance",
        description: "The patient has been recommended for repeated PSA screening at an interval of X months.",
    },
    [Stage.BIOMARKER]: {
        name: "Biomarker",
        description: "The patient’s PSA level remained elevated and the biomarker results were abnormal, further suggesting clinically significant prostate cancer. The AUA strongly recommends that the patient be scheduled for a biopsy. An MRI can be scheduled to determine the necessary type of biopsy performed (targeted v.s. systemic)",
    },
    [Stage.UROLOGIST]: {
        name: "Urologist",
        description: "The patient's test results have remained above the threshold level of concern and the patient has been recommended for an appointment with a urologist.",
    },
    [Stage.BIOPSY]: {
        name: "Biopsy",
        description: "After a consultation with a urologist, the patient may need to undergo a biopsy to determine the severity of their situation.",
    },
}

export default stages
