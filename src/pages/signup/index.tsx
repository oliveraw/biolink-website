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

export default function SignUp() {
  const router = useRouter()
  const [formState, setFormState] = useState<string>("signUp")
  const [formInputs, setFormInputs] = useState<FormInputs>({
    name: "",
    email: "",
    phone: "",
    password: "",
    verificationCode: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormInputs({ ...formInputs, [event.target.name]: event.target.value });
  };

  async function signUp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      await Auth.signUp({
        username: formInputs.email,
        password: formInputs.password,
        attributes: {
          name: formInputs.name,
          /*
            this really aint it
          */
          phone_number: "+1" + formInputs.phone,
        }
      });
      setFormState("confirmSignUp")
    } catch (err) {
      console.log({ err });
      if (err.name === 'UsernameExistsException') {
        // request revalidation
        resendSignUp()
      }
      return;
    }
    console.log("User signed up:", formInputs);
  }

  async function resendSignUp() {
    try {
      await Auth.resendSignUp(formInputs.email);
      setFormState("confirmSignUp")
    } catch (err) {
      console.log({ err });
      return;
    }
    console.log("User requested another validation code", formInputs)
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
    router.push('/dashboard');
  }


  if (formState === 'signUp') {
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
            <form className="space-y-6" action="#" method="POST">
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
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
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
              </div>

              <div>
                <button
                  onClick={signUp}
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </>
    )
  }

  if (formState === 'confirmSignUp') {
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
          <form className="space-y-6" action="#" method="POST">
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
                onClick={confirmSignUp}
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
}