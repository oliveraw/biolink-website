'use client'

import { Auth } from 'aws-amplify';
import { useRouter } from 'next/navigation'
import { useState } from 'react';

type FormInputs = {
  name: string;
  email: string;
  phone: string;
  password: string;
  verificationCode: string;
};

enum FormStates {
  signUp,
  signIn,
  verificationCode,
  forgotPassword
}

export default function SignUp() {
  const router = useRouter()
  const [formState, setFormState] = useState<FormStates>(FormStates.signIn)
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: "",
    email: "",
    phone: "",
    password: "",
    verificationCode: "",
  });
  const [errorMessage, setErrorMessage] = useState<string>("")

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };
  const setFormStateAndResetError = (formState: FormStates) => {
    setErrorMessage("");
    setFormState(formState);
  }

  // these asyncs handle what happens when a user clicks submit

  async function signUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await Auth.signUp({
        username: formInputs.email,
        password: formInputs.password,
        attributes: {
          name: formInputs.name,
          /*
            todo: this really aint it
          */
          phone_number: "+1" + formInputs.phone,
        }
      });
    } catch (err: any) {
      console.log({ err });
      if (err.name === 'UsernameExistsException') {
        // todo: have some message here 
        setFormStateAndResetError(FormStates.signIn)
      }
      return;
    }
    console.log("User signed up:", formInputs);
    setFormStateAndResetError(FormStates.verificationCode)
  }

  async function confirmSignUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await Auth.confirmSignUp(
        formInputs.email,
        formInputs.verificationCode
      );
    } catch (err) {
      console.log({ err });
      return;
    }
    console.log("User was verified:", formInputs);
    setFormStateAndResetError(FormStates.signIn);
  }

  async function requestAnotherVerificationCode() {
    try {
      await Auth.resendSignUp(formInputs.email);
    } catch (err) {
      console.log({ err });
      return;
    }
    console.log("User requested another validation code", formInputs);
    setFormStateAndResetError(FormStates.verificationCode);
  }

  async function signIn(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await Auth.signIn(formInputs.email, formInputs.password);
    } catch (err: any) {
      console.log({ err });
      if (err.name === "NotAuthorizedException") {
        setErrorMessage("Username or password was incorrect. Please try again.")
      }
      return;
    }
    console.log("User logged in", formInputs)
    router.push('/dashboard')
  }

  // below this are the different form states

  if (formState === FormStates.signUp) {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign up for an account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={signUp} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    value={formInputs.name}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formInputs.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Phone number
                </label>
                <div className="mt-2">
                  <input
                    id="phone"
                    name="phone"
                    type="phone"
                    autoComplete="phone"
                    value={formInputs.phone}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={formInputs.password}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="block m-4 text-sm font-small leading-6 text-gray-900">
                  Password must have: ....
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>

              <p className="mt-10 text-center text-sm text-gray-500">
                Have an account already?{' '}
                <button onClick={() => setFormStateAndResetError(FormStates.signIn)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                  Sign in
                </button>
              </p>
            </form>
          </div>
        </div>
      </>
    )
  }

  if (formState === FormStates.signIn) {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Sign in to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={signIn} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formInputs.email}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <button className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </button>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={formInputs.password}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>

              <div className="flex flex-col items-center text-red-500 text-sm h-6">
                {errorMessage}
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Not a member?{' '}
              <button onClick={() => setFormStateAndResetError(FormStates.signUp)} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                Sign up
              </button>
            </p>
          </div>
        </div>
      </>
    )
  }

  if (formState === FormStates.verificationCode) {
    return (
      <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Verify your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={confirmSignUp} className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="verification" className="block text-sm font-medium leading-6 text-gray-900">
                  Verification code
                </label>
                <div className="mt-2">
                  <input
                    name='verificationCode'
                    value={formInputs.verificationCode}
                    onChange={handleInputChange}
                    required
                    className="block w-full rounded-md border-0 py-1.5 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Verify
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }

  if (formState === FormStates.forgotPassword) {
    return (
      <>
        <p>Rip</p>
      </>
    )
  }
}