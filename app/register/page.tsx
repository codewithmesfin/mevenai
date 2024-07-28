
import { RegisterForm } from './register-form';

export default async function RegisterPage() {
  return (
    <>
      <section className="bg-[#0a0a0a] min-h-screen pt-20">
        <div className="py-24 h-full flex justify-center items-center">
          <div className="mx-auto w-full md:max-w-5xl ">
            <div className='bg-gray-700 rounded-xl'>
              <div className="md:flex md:items-center md:space-x-10">

                <div className='w-full md:w-1/2'>
                  <h1 className='text-center text-4xl text-gray-100'>Instructions</h1>
                </div>
                <div className='w-full md:w-1/2 bg-gray-800 md:rounded-r-xl'>
                  <div className="border-l border-gray-600 p-5 md:p-10 md:py-16">
                    <div className="pb-6">
                    <h1 className='text-gray-100 text-lg md:text-3xl'>Sign up for a better experience</h1>
                    </div>
                    <RegisterForm />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
