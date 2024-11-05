'use client';

import TextField from "@/components/inputs/textField";
import { useEffect, useState } from "react";
import validate from '../../lib/validator'
import Link from "next/link";
import LoadingIndicator from "@/components/loadingIndicator";
import api from "@/app/lib/api";
import { useRouter } from "next/navigation";
import show from "@/app/lib/toast";
import { setToken } from "@/app/lib/auth";
import { useAuth } from "@/app/context/AuthContext";

export default function Signup() {
  const { login } = useAuth();
  const [user, setUser] = useState<any>(null)
  const [formError, setFormError] = useState<any>(null)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter();

  useEffect(() => {
    validate.signupForm(formError)
  }, [formError])


  const submit = async () => {
    setSubmitting(true)
    const payload = {
      ...user,
      "status": "active"
    }
    api.signup(payload, "/signup")
      .then((res: any) => {
        // console.log(res.data.token)
        login(res.data.token)
        setSubmitting(false)
        show.success("Congratulation! Your account has been created successfully.")
        router.push('/home');
      })
      .catch(err => {
        // console.log('Err: ',err)
        show.error("Unable to create your account. Try againa.")
        setSubmitting(false)
      })

  }


  return (
    <>

      <div className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Create your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full md:max-w-lg">
          <div className="space-y-6" >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <TextField
                  label="First Name"
                  type="text"
                  placeholder="Enter your first name"
                  onChange={(e: string) => {
                    setUser({ ...user, firstName: e })
                    setFormError({ ...formError, firstName: validate.firstName(e) ? undefined : 'Invalid first name' })
                  }}
                  value={user?.firstName}
                  error={formError?.firstName}
                />
              </div>

              <div>
                <TextField
                  label="Last Name"
                  type="text"
                  placeholder="Enter your last name"
                  onChange={(e: string) => {
                    setUser({ ...user, lastName: e })
                    setFormError({ ...formError, lastName: validate.lastName(e) ? undefined : 'Invalid last name' })
                  }}
                  value={user?.lastName}
                  error={formError?.lastName}
                />
              </div>

              <div>
                <TextField
                  label="Email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={(e: string) => {
                    setUser({ ...user, email: e })
                    setFormError({ ...formError, email: validate.email(e) ? undefined : 'Invalid email address' })
                  }}
                  value={user?.email}
                  error={formError?.email}
                />
              </div>

              <div>
                <TextField
                  label="Phone Number"
                  placeholder="Enter your phone number"
                  onChange={(e: string) => {
                    setUser({ ...user, phone: e })
                    setFormError({ ...formError, phone: validate.phoneNumber(e) ? undefined : 'Invalid phone number' })
                  }}
                  value={user?.phone}
                  error={formError?.phone}
                />
              </div>

              <div>
                <TextField
                  label="Password"
                  placeholder="Type your password"
                  onChange={(e: string) => {
                    setUser({ ...user, password: e })
                    setFormError({ ...formError, password: validate.password(e) ? undefined : 'Password must be more than 5 characters' })
                  }}
                  value={user?.password}
                  type="password"
                  error={formError?.password}
                />
              </div>

              <div>
                <TextField
                  label="Confirm Password"
                  placeholder="Type your password"
                  onChange={(e: string) => {
                    setUser({ ...user, confirmPassword: e })
                    setFormError({ ...formError, confirmPassword: e != user?.password ? "Password mismatched" : undefined })
                  }}
                  value={user?.confirmPassword}
                  type="password"
                  error={formError?.confirmPassword}
                />
              </div>
            </div>

            <div>
              <button
                onClick={submit}
                disabled={!validate.signupForm(formError) || submitting}
                className={`${validate.signupForm(formError) && !submitting ? 'bg-indigo-600 focus-visible:outline-indigo-600 hover:bg-indigo-500' : 'bg-gray-400'} flex w-full justify-center items-center space-x-2 rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                {submitting && <LoadingIndicator color="fill-blue-600" />}
                {submitting ? <span>Creating your account ...</span> : <span>Start a 7 day free trial</span>}
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account ?
            <Link href="/auth/login" className="px-1 font-semibold text-indigo-600 hover:text-indigo-500">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
