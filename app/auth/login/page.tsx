'use client';

import LoginForm from "./components/loginForm";


export default function Login() {


  return (
    <div className="bg-white flex min-h-full flex-1 flex-col justify-center px-6 py-12">
      <div className="w-[90%]  mx-auto">
        <div className="sm:mx-auto w-full sm:max-w-sm">

          <h2 className="mt-6 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Login to your account
          </h2>
        </div>
        <div className="md:flex justify-center items-center md:space-x-10">
          <section className="w-full md:w-1/2">
            <div className="border7 border-gray-200 rounded md:p-10">
              <LoginForm />
            </div>
          </section>
        </div>
      </div>

    </div>
  )
}
