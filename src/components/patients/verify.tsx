import { useForm } from 'react-hook-form'

import { Patient } from '@/API'

import SubmitButton from '@/components/general/submit-button'
import TextInput from '@/components/general/text-input'
import Header from "@/components/auth/header"

interface VerifyData {
  birthday: string
}

export default function Verify({
  patient,
  onVerify
}: {
  patient: Patient,
  onVerify: () => void
}) {
  const { register, formState: { errors }, handleSubmit } = useForm<VerifyData>()

  return (
    <>
        <Header>Verify Date of Birth</Header>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit(onVerify)}>
                <TextInput
                    type="date"
                    register={register('birthday', {
                        required: 'Birthday required',
                        validate: (value) => value === patient.birthday || 'Incorrect birthday'
                    })}
                    error={errors.birthday?.message}
                >
                    Birthday
                </TextInput>

                <SubmitButton>Submit</SubmitButton>
            </form>
        </div>
    </>
  )
}
