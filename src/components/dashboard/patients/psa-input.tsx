import { Patient } from "@/API"
import SubmitButton from "@/components/general/submit-button"
import TextInput from "@/components/general/text-input"
import { updatePatient } from "@/graphql/mutations"
import { useMutation } from "@tanstack/react-query"
import { Card, Title, Text } from "@tremor/react"
import { API } from "aws-amplify"
import { useRouter } from "next/router"
import { useForm } from "react-hook-form"

interface PSAData {
    psaToAdd: string
}

export default function PsaInput({
    patient
}: {
    patient: Patient
}) {
    const { reload } = useRouter()

    const { register, handleSubmit } = useForm<PSAData>()

    const mutation = useMutation<any, Error, PSAData>({
        mutationFn: async (data) => await API.graphql({
            query: updatePatient,
            variables: {
                input: {
                    id: patient.id,
                    psas: [...patient.psas, data.psaToAdd],
                }
            }
        }),
        onSuccess(res) {
            console.log(res)
            reload()
        },
        onError(err) {
            console.log(err)
        }
    })
    return (
        <>
            <Card>
                <Title>PSA Results</Title>
                <ul>
                    {patient.psas.length ?
                        patient.psas.map((psa, idx) => (<Text key={idx}>{psa} ng/ml</Text>)) :
                        <Text>No scores available</Text>}
                </ul>
                <form className="mt-4 space-y-4" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
                    <TextInput
                        type="text"
                        register={register('psaToAdd', {
                            required: 'PSA required',
                        })}
                    >
                        Add a PSA Result
                    </TextInput>

                    <SubmitButton loading={mutation.isLoading}>Add result</SubmitButton>
                </form>
            </Card >
        </>
    )
}