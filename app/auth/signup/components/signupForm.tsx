'use client';

import TextField from "@/components/inputs/textField";
import { useEffect, useState } from "react";
import validate from '../../../lib/validator'
import Link from "next/link";
import LoadingIndicator from "@/components/loadingIndicator";
import api from "@/app/lib/api";
import { useRouter } from "next/navigation";
import show from "@/app/lib/toast";
import { useAuth } from "@/app/context/AuthContext";
import { saveUserTopLocalStorage } from "@/app/lib/auth";

export default function SignupForm() {
    const { login } = useAuth();
    const [user, setUser] = useState<any>(null)
    const [formError, setFormError] = useState<any>(null)
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter();

    useEffect(() => {
        validate.signupForm(formError)
    }, [formError])


    const submit = async () => {
        if (!user || (!user.firstName || !user.lastName || !user.email || !user.phone || !user.password)) {
            show.error("Please fill all form fields with valid information!")
        }
        else {
            setSubmitting(true)
            const payload = {
                ...user,
                "status": "active"
            }
            api.signup(payload, "/signup")
                .then((res: any) => {
                    login(res.data.token)
                    saveUserTopLocalStorage(JSON.stringify(res.data.user))
                    setSubmitting(false)
                    show.success("Congratulation! Your account has been created successfully.")
                    router.push('/setup');
                })
                .catch(err => {
                    show.error("Unable to create your account. Try again.")
                    setSubmitting(false)
                })
        }

    }


    return (
        <div>
            <div className="space-y-6" >
                <div className="py-2 grid grid-cols-1 md:grid-cols-2 gap-4">

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

                <div className="flex justify-center">
                    <button
                        onClick={submit}
                        disabled={!validate.signupForm(formError) || submitting}
                        className={`w-full ${validate.signupForm(formError) && !submitting ? 'border-blue-600 bg-blue-600 hover:bg-green-500 hover:border-green-500' : 'bg-gray-400'} md:text-lg flex justify-evenly items-center space-x-1 md:space-x-3 border rounded text-white px-3 md:px-6 py-2.5`}
                    >
                        {submitting && <LoadingIndicator color="fill-blue-600" />}
                        {submitting ? <span>Creating your account ...</span> : <span>Start a 7 day free trial</span>}
                    </button>
                </div>
            </div>
            <p className="mt-10 text-center text-sm/6 text-gray-500">
                Already have an account?
                <Link href="/auth/login" className="px-2 font-semibold text-blue-600 hover:text-blue-500">
                    Sign in
                </Link>
            </p>
        </div>
    )
}
