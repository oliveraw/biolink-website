'use client'

import type { ReactElement } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import Header from '@/components/auth/header'
import TextInput from '@/components/auth/text-input'
import Checkbox from '@/components/auth/checkbox'
import TextLink from '@/components/auth/text-link'
import SubmitButton from '@/components/auth/submit-button'
import Layout from '@/components/auth/layout'

interface SignInData {
  email: string
  password: string
  remember: boolean
}

export default function SignInPage() {
  const { register, handleSubmit } = useForm<SignInData>()

  const onSubmit: SubmitHandler<SignInData> = (data) => console.log(data)

  return (
    <>
      <Header>Sign in</Header>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
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

          <div className="flex items-center justify-between text-sm">
            <Checkbox
              register={register('remember')}
            >
              Remember me
            </Checkbox>
            <TextLink href="/auth/reset">Forgot password?</TextLink>
          </div>

          <SubmitButton>Sign in</SubmitButton>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Don't have an account? <TextLink href="/auth/sign-up">Sign up</TextLink>
        </p>
      </div>
    </>
  )
}

SignInPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
