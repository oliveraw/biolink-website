// i'm adding this page bc in the whatsapp template i submitted for approval i linked biolinkanalytics/com/patients, in case they look
import Header from "@/components/auth/header";
import { DatePicker } from "@tremor/react";

export default function Patients() {
    return (
        <div className="flex flex-col justify-center items-center mt-10">
            <Header>Please verify your date of birth:</Header>
            <DatePicker className="max-w-sm mx-auto mt-10" enableYearNavigation={true} placeholder="Select date" />
        </div>
    )
}