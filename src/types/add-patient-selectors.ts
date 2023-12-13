import { CancerStage, Treatment } from "@/API"

export interface hasNameAndValue {
    name: string
    value: string
}

export const races = [
    {
        name: "Native American / Alaskan Native",
        value: "Native American / Alaskan Native",
    },
    {
        name: "Asian / Pacific Islander",
        value: "Asian / Pacific Islander",
    },
    {
        name: "Black / African American",
        value: "Black / African American",
    },
    {
        name: "Hispanic / Latinx",
        value: "Hispanic / Latinx",
    },
    {
        name: "White / Caucasian",
        value: "White / Caucasian",
    },
    {
        name: "Biracial or Multiracial",
        value: "Biracial or Multiracial",
    },
    {
        name: "Other",
        value: "Other",
    }
]

export const sexes = [
    {
        name: "Male",
        value: "Male",
    },
    {
        name: "Female",
        value: "Female"
    }
]

export const cancerStages = [
    {
        name: "N/A",
        value: CancerStage.NOT_APPLICABLE
    },
    {
        name: "T1",
        value: CancerStage.T1
    },
    {
        name: "T2",
        value: CancerStage.T2
    },
    {
        name: "T3",
        value: CancerStage.T3
    },
]

export const treatments = [
    {
        name: "Surgery",
        value: Treatment.SURGERY,
    },
    {
        name: "Radiation",
        value: Treatment.RADIATION,
    },
    {
        name: "ADT",
        value: Treatment.ADT,
    },
]