"use client";
import { login } from '@/backend/Services/auth';
import { ADMIN_ROUTES } from '@/core/routes';
import { Button, Input } from '@nextui-org/react'
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import React from 'react'

function Auth() {
  const [submitting, setSubmitting] = React.useState(false)
  const routes = useRouter()
  const loginMutation = useMutation({
    mutationFn: (data: any) => {
      return login(data.email, data.password)
    },
    onSuccess: (data) => {
      setSubmitting(false)
      alert('Logged in successfully')
      routes.push(ADMIN_ROUTES.DASHBOARD)
    },
    onError: (error: any) => {
      setSubmitting(false)
      alert(error)
    },
  })
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    const formElement = e.target as HTMLFormElement;
    const inputs = formElement.querySelectorAll('input');
    const email = inputs[0]
    const password = inputs[1]
    const resp = await login(email.value, password.value)
    if (resp.status) {
      setSubmitting(false)
      alert('Logged in successfully')
      routes.push(ADMIN_ROUTES.DASHBOARD)
    } else {
      setSubmitting(false)
      alert(resp.message)
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center gap-[2vh] align-middle'>
      <div className='w-full md:w-1/2 p-5 flex flex-col justify-center text-center align-middle max-h-max gap-5 '>
        <h1 className='text-2xl font-bold'>Logo</h1>
        <h1 className='text-2xl font-bold'>Login</h1>
        <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
          <Input
            key={"inside"}
            type="email"
            label="Email"
            labelPlacement={"inside"}
          />
          <Input
            key={"inside"}
            type="password"
            label="Password"
            labelPlacement={"inside"}
          />
          <Button
            isLoading={submitting}
            color="secondary"
            className='p-6 text-lg font-bold'
            type='submit'
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            {submitting ? "Logging in..." : "Login"}
          </Button>
        </form>
      </div>
    </div>

  )
}

export default Auth
