import type { ReactElement } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useMutation } from '@tanstack/react-query'
import { Auth } from 'aws-amplify'
import { CognitoUser } from 'amazon-cognito-identity-js'

import { AuthLayout } from '@/components/layouts'

import Header from '@/components/auth/header'
import TextInput from '@/components/general/text-input'
import Checkbox from '@/components/general/checkbox'
import TextLink from '@/components/general/text-link'
import ErrorCallout from '@/components/general/error-callout'
import SubmitButton from '@/components/general/submit-button'

interface SignInData {
  email: string
  password: string
  remember: boolean
}

export default function SignInPage() {
  const router = useRouter()

  const { register, formState: { errors }, handleSubmit } = useForm<SignInData>()

  const mutation = useMutation<CognitoUser, Error, SignInData>({
    mutationFn: (data) => Auth.signIn(
      data.email,
      data.password
    ),
    onSuccess: (_) => {
      router.push('/dashboard/patients')
    },
  })

  return (
    <div className="space-y-6">
      <Header>Sign In</Header>

      <form className="space-y-6" onSubmit={handleSubmit((data) => mutation.mutate(data))}>
        <TextInput
          type="email"
          register={register('email', {
            required: 'Email address required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address'
            }
          })}
          error={errors.email?.message}
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
          error={errors.password?.message}
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

        {mutation.isError && <ErrorCallout error={mutation.error.message} />}

        <SubmitButton loading={mutation.isLoading}>Sign in</SubmitButton>
      </form>

      <p className="text-center text-sm text-gray-500">
        Don&apos;t have an account? <TextLink href="/auth/sign-up">Sign up</TextLink>
      </p>
    </div>
  )
}

SignInPage.getLayout = (page: ReactElement) => {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
