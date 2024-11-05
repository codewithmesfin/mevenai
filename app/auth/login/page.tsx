'use client';

import TextField from "@/components/inputs/textField";
import { useEffect, useState } from "react";
import validate from '../../lib/validator'
import Link from "next/link";
import LoadingIndicator from "@/components/loadingIndicator";
import api from "@/app/lib/api";
import Cookies from 'js-cookie';  // Import js-cookie for setting cookies
import { useRouter } from "next/navigation";
import show from "@/app/lib/toast";
import { useAuth } from "@/app/context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const [user, setUser] = useState<any>(null)
  const [formError, setFormError] = useState<any>(null)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter();

  useEffect(() => {
    validate.signinForm(formError)
  }, [formError])


  const submit = async () => {
    setSubmitting(true)
    const payload = {
      ...user,
      "status": "active"
    }
    api.login(payload, "/signin")
      .then((res: any) => {
        login(res.data.token)
        setSubmitting(false)
        show.success("Congratulation! Your have been logged in successfully.")
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
            Login to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full md:max-w-xs">
          <div className="space-y-6" >
            <div className="grid grid-cols-1 md:grid-cols-1 gap-4">


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
                  label={
                    <div className="flex justify-between space-x-4">
                      <span>Password</span>
                      <Link href="/auth/login" className="px-1 text-indigo-600 hover:text-indigo-500">
                        Forgot password
                      </Link>
                    </div>
                  }
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


            </div>

            <div>
              <button
                onClick={submit}
                disabled={!validate.signinForm(formError) || submitting}
                className={`${validate.signinForm(formError) && !submitting ? 'bg-indigo-600 focus-visible:outline-indigo-600 hover:bg-indigo-500' : 'bg-gray-400'} flex w-full justify-center items-center space-x-2 rounded-md  px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`}
              >
                {submitting && <LoadingIndicator color="fill-blue-600" />}
                {submitting ? <span>Trying to login ...</span> : <span>Sign in</span>}
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Not a member ?
            <Link href="/auth/signup" className="px-1 font-semibold text-indigo-600 hover:text-indigo-500">
              Start a 7 day free trial
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
