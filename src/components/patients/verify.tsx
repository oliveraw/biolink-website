import { useForm } from 'react-hook-form'

import { Patient } from '@/API'

import SubmitButton from '@/components/general/submit-button'
import TextInput from '@/components/general/text-input'
import Header from "@/components/auth/header"
import { useMutation, useQuery } from '@tanstack/react-query'
import { API } from 'aws-amplify'
import { sendVerificationCode } from '@/graphql/queries'
import { useState } from 'react'

// export default function Verify({
//   patient,
//   onVerify
// }: {
//   patient: Patient,
//   onVerify: () => void
// }) {
//   const { register, formState: { errors }, handleSubmit } = useForm<VerifyData>()

//   return (
//     <>
//         <Header>Verify Date of Birth</Header>

//         <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
//             <form className="space-y-6" onSubmit={handleSubmit(onVerify)}>
//                 <TextInput
//                     type="date"
//                     register={register('birthday', {
//                         required: 'Birthday required',
//                         validate: (value) => value === patient.birthday || 'Incorrect birthday'
//                     })}
//                     error={errors.birthday?.message}
//                 >
//                     Birthday
//                 </TextInput>

//                 <SubmitButton>Submit</SubmitButton>
//             </form>
//         </div>
//     </>
//   )
// }

interface VerifyData {
  code: String,
  timestamp: Number,
}

// 6 digit string code using built in crypto library
function generateVerificationCode() {
  var buf = new Uint32Array(1);
  const code_int = crypto.getRandomValues(buf)[0] % 1000000
  return String(code_int).padStart(6, '0')
}

export default function Verify({
  patient,
  onVerify,
}: {
  patient: Patient,
  onVerify: () => void,
}) {
  const [code, setCode] = useState<String>(generateVerificationCode())
  const [timestamp, setTimestamp] = useState<Number>(new Date().getTime())

  const { register, formState: { errors }, handleSubmit } = useForm<VerifyData>()

  API.graphql({
    query: sendVerificationCode,
    variables: {
      phone: patient.phone,
      language_code: patient.language_code,
      code: code
    }
  })

  return (
    <>
      <Header>Enter Your Verification Code</Header>
      <div className="text-center mt-4">We have sent a 6 digit verification code to {patient.phone}. This code will expire in 10 minutes.</div>
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onVerify)}>
          <TextInput
            type="text"
            register={register('code', {
              required: 'Please enter your code',
              validate: (value) => value === code || 'Incorrect code'
            })}
            error={errors.code?.message}
          >
            Verification Code
          </TextInput>
          <SubmitButton>Submit</SubmitButton>
        </form>
      </div>
    </>
  )
}