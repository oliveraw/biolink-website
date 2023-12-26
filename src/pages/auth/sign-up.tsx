import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'
import { ISignUpResult } from 'amazon-cognito-identity-js'
import { Callout } from '@tremor/react'
import { InformationCircleIcon } from '@heroicons/react/24/solid'

import Header from '@/components/auth/header'
import TextInput from '@/components/general/text-input'
import PhoneInput from '@/components/general/phone-input'
import Checkbox from '@/components/general/checkbox'
import TextLink from '@/components/general/text-link'
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'
import Layout from '@/components/auth/layout'

interface SignUpData {
  name: string
  email: string
  phone: string
  password: string
  confirm: string
  agreed: boolean
}

export default function SignUpPage() {
  const router = useRouter()

  const { register, control, watch, handleSubmit } = useForm<SignUpData>({
    defaultValues: {
      phone: '',
    }
  })

  const mutation = useMutation<ISignUpResult, Error, SignUpData>({
    mutationFn: (data) => Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        name: data.name,
        phone_number: '+1' + data.phone
      }
    }),
    onSuccess: (_) => {
      router.push('/dashboard/overview')
    },
  })

  return (
    <>
      <Header>Sign Up</Header>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
          <TextInput
            type="text"
            register={register('name', {
              required: 'Name required',
            })}
          >
            Name
          </TextInput>

          <TextInput
            type="email"
            register={register('email', {
              required: 'Email address required',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                message: 'Invalid email address'
              }
            })}
          >
            Email address
          </TextInput>

          <PhoneInput
            name="phone"
            control={control}
            rules={{
              required: 'Phone number required',
            }}
          >
            Phone number
          </PhoneInput>

          <TextInput
            type="password"
            register={register('password', {
              required: 'Password required',
              minLength: {
                value: 8,
                message: 'Password does not meet minimum length'
              }
            })}
          >
            Password
          </TextInput>

          <Callout
            title="Password Requirements"
            icon={InformationCircleIcon}
            color="teal"
          >
            <ul className="ml-4 list-disc list-inside">
              <li>At least eight characters</li>
              <li>At least one uppercase character</li>
              <li>At least one lowercase character</li>
              <li>At least one number</li>
              <li>At least one special character, e.g., ! @ # ?</li>
            </ul>
          </Callout>

          <TextInput
            type="password"
            register={register('confirm', {
              required: 'Password confirmation required',
              validate: value => value === watch('password') || 'Password confirmation does not match password'
            })}
          >
            Confirm password
          </TextInput>

          <Checkbox
            register={register('agreed', {
              required: 'Agreement required'
            })}
          >
            I agree to the <TextLink href="/auth/terms">terms and conditions</TextLink>
          </Checkbox>

          {mutation.isError && <ErrorCallout error={mutation.error.message} />}

          <SubmitButton loading={mutation.isLoading}>Sign up</SubmitButton>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Have an account? <TextLink href="/auth/sign-in">Sign in</TextLink>
        </p>
      </div>
    </>
  )
}

SignUpPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
