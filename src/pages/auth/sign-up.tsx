import type { ReactElement } from 'react'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'
import { ISignUpResult } from 'amazon-cognito-identity-js'

import Header from '@/components/auth/header'
import TextInput from '@/components/general/text-input'
import Checkbox from '@/components/general/checkbox'
import TextLink from '@/components/general/text-link'
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
  const { register, watch, handleSubmit } = useForm<SignUpData>()

  const mutation = useMutation<ISignUpResult, Error, SignUpData>({
    mutationFn: (data) => Auth.signUp({
      username: data.email,
      password: data.password,
      attributes: {
        name: data.name,
        phone_number: "+1" + data.phone
      }
    }),
    onSuccess: (data) => {
      console.log(data)
    },
    onError: (error) => {
      console.log(error)
    }
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

          <TextInput
            type="tel"
            register={register('phone', {
              required: 'Phone number required',
            })}
          >
            Phone number
          </TextInput>

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

          <div className="mt-2 flex p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
            <svg className="flex-shrink-0 inline w-4 h-4 mr-3 mt-[2px]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <span className="font-medium">Ensure that these requirements are met:</span>
              <ul className="mt-1.5 ml-4 list-disc list-inside">
                <li>At least eight characters</li>
                <li>At least one uppercase character</li>
                <li>At least one lowercase character</li>
                <li>At least one number</li>
                <li>At least one special character, e.g., ! @ # ?</li>
              </ul>
            </div>
          </div>

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
