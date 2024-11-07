'use client';

import TextField from "@/components/inputs/textField";
import { useEffect, useState } from "react";
import validate from '../../../lib/validator'
import Link from "next/link";
import LoadingIndicator from "@/components/loadingIndicator";
import api from "@/app/lib/api";
import Cookies from 'js-cookie';  // Import js-cookie for setting cookies
import { useRouter } from "next/navigation";
import show from "@/app/lib/toast";
import { useAuth } from "@/app/context/AuthContext";
import { saveUserTopLocalStorage } from "@/app/lib/auth";

export default function LoginForm() {
  const { login } = useAuth();
  const [user, setUser] = useState<any>(null)
  const [formError, setFormError] = useState<any>(null)
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter();

  useEffect(() => {
    validate.signinForm(formError)
  }, [formError])


  const submit = async () => {
    if (!user || (!user.email || !user.password)) {
      show.error("Please fill your email and password fields with valid information!")
    }
    else {
      setSubmitting(true)
      const payload = {
        ...user,
        "status": "active"
      }
      api.login(payload, "/signin")
        .then((res: any) => {
          login(res.data.token)
          saveUserTopLocalStorage(JSON.stringify(res.data.user))
          setSubmitting(false)
          show.success("Congratulation! Your have been logged in successfully.")
          router.push('/home');
        })
        .catch(() => {
          show.error("Unable to login to your account. Try again.")
          setSubmitting(false)
        })
    }

  }

  return (
    <div className="mt-10 sm:mx-auto sm:w-full md:max-w-sm">
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
                  <Link href="/auth/login" className="px-1 text-blue-600 hover:text-blue-500">
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

        <div className="flex justify-center">
          <button
            onClick={submit}
            disabled={!validate.signinForm(formError) || submitting}
            className={`w-full ${validate.signinForm(formError) && !submitting ? 'border-blue-600 bg-blue-600 hover:bg-green-500 hover:border-green-500' : 'bg-gray-400'} md:text-lg flex justify-evenly items-center space-x-1 md:space-x-3 border rounded text-white px-3  md:px-6 py-2.5`}
          >
            {submitting && <LoadingIndicator color="fill-blue-600" />}
            {submitting ? <span>Trying to login ...</span> : <span>Sign in</span>}
          </button>
        </div>
      </div>

      <p className="mt-10 text-center text-sm/6 text-gray-500">
        Not a member?
        <Link href="/auth/signup" className="px-2 font-semibold text-blue-600 hover:text-blue-500">
          Start a 7 day free trial
        </Link>
      </p>
    </div>
  )
}
