"use client"

import React, { useEffect, useState } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { validateEmail, validateName, validatePhone } from '@/lib/validateForm'



export default function Reachus() {
    const [loading, setLoading] = useState(false)

    const [message, setMessage] = useState<any>({ message: null, email: null, phone: null, name: null, subject: "" })

    const [disbaled, setDisabled] = useState(true)
    const [valid, setValid] = useState({ name: true, email: true, phone: true, message: true })


    const submit = async () => {

        if (
            message.email != "" &&
            message.phone != "" &&
            message.name != "" &&
            message.message != ""

        ) {
            setLoading(true)
            const payload = {
                subject: `${message.name} - ${message.phone}`,
                from: message.email,
                to: "mesfin@mevinai.com",
                message: `
                            ${message.message} 

                           - Phone number:  ${message.phone}
                           - Email address:  ${message.email}
                        `
            }
            try {
                await axios.post('/api/email', {
                    ...payload
                });
                toast.success(`Dear ${message.name}, we have received your request sucessfully. Our team of experts will review it and get back to you soon. Thank you for choosing Mevinai.`, {
                    position: "top-right",
                });
            } catch (error) {
                toast.error('Unable to submit youw requests. Try again later.', {
                    position: "top-right"
                });
            } finally {
                setMessage({ email: "", name: "", phone: "", message: "" })
                setValid({ email: true, name: true, phone:true, message: true })
                setDisabled(true)
                setLoading(false)
            }
        }

else{
    toast.error('Please fill all fields with correct value and try again later.', {
        position: "top-right"
    });
}
    }


    useEffect(() => {
        setValid({
            ...message,
            name: message.name == null || validateName(message.name),
            email: message.email == null || validateEmail(message.email),
            phone: message.phone == null || validatePhone(message.phone),
            message: message.message != ""
        })
        if (message.email != "" && message.phone != "" && message.name != "" && message.message != "" &&
            message.email != null && message.phone != null && message.name != null && message.message != null
        )
            setDisabled(!validateName(message.name) || !validateEmail(message.email) || !validatePhone(message.phone) || !valid.message)

    }, [message.name, message.email, message.phone, message.message])



    return (
        <>
            <div>

                <section>
                    <div className="container mx-auto py-32">
                        <h1 className="text-2xl font-bold mb-6 text-center">Registration Form</h1>
                        <div className="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md">
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="name"
                                >
                                    Name
                                </label>
                                <input
                                    className={`w-full px-3 py-2 border ${valid.name ? 'border-gray-300' : 'border-red-600'} rounded-md focus:outline-none focus:border-indigo-500`}
                                    type="text"
                                    placeholder="Your full name"
                                    value={message.name}
                                    onChange={(e: any) => setMessage({ ...message, name: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                    htmlFor="email"
                                >
                                    Email
                                </label>
                                <input
                                    className={`w-full px-3 py-2 border ${valid.email ? 'border-gray-300' : 'border-red-600'} rounded-md focus:outline-none focus:border-indigo-500`}
                                    type="email"
                                    placeholder='Your email address'
                                    value={message.email}
                                    onChange={(e: any) => setMessage({ ...message, email: e.target.value })}
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Phone number
                                </label>
                                <input
                                    className={`w-full px-3 py-2 border ${valid.phone ? 'border-gray-300' : 'border-red-600'} rounded-md focus:outline-none focus:border-indigo-500`}
                                    type="tel"
                                    required
                                    pattern="^(\+251|251)?(0?9[0-9]{8})$"
                                    placeholder='Your Phone Number'
                                    value={message.phone}
                                    onChange={(e: any) => setMessage({ ...message, phone: e.target.value })}

                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 text-sm font-bold mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    rows={4}
                                    placeholder='Write your message here.'
                                    className={`w-full px-3 py-2 border ${valid.message ? 'border-gray-300' : 'border-red-600'} rounded-md focus:outline-none focus:border-indigo-500`}
                                    value={message.message}
                                    onChange={(e: any) => setMessage({ ...message, message: e.target.value })}
                                />
                            </div>
                            {loading ?
                                <div role="status" className='ml-3 flex justify-center'>
                                    <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                : <button
                                onClick={submit}
                                    disabled={disbaled}
                                    className={`w-full ${disbaled ? 'bg-gray-500' : 'bg-[#ff4533] hover:bg-green-600'} text-white text-sm font-bold py-3 px-4 rounded-md  transition duration-300`}
                                    type="submit"
                                >
                                    Request a service
                                </button>}
                        </div>
                    </div>

                </section>
                {/* <section className="bg-[#0a0a0a] flex items-center">
                    <div className="w-[95%] md:w-[80%] mx-auto py-32 md:py-48">
                        <div className='bg-gray-900 rounded-xl'>
                            <div className="md:flex md:items-center md:space-x-10">
                                <div className="w-full md:w-3/5">
                                    <div className="py-4 px-5 md:px-10">
                                        <div className="py-4">
                                            <h1 className='text-6xl md:text-8xl text-center'>🚀</h1>
                                        </div>
                                        <h1
                                            style={{ lineHeight: 1.2 }}
                                            className="text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-gray-400 to-gray-200 text-transparent bg-clip-text"
                                        >
                                            Ready to Revolutionize Your business? Join the Mevinai Waitlist Today!
                                        </h1>
                                    </div>
                                </div>
                                <div className="w-full md:w-2/5 bg-gray-700 rounded-r-xl border-l border-gray-800 p-5 md:p-10">
                                    <div className="">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <div className="my-3">
                                                <input type="text" placeholder='Your full name'
                                                    className='focus:outline-none focus:ring-0 text-gray-200 w-full bg-gray-800 border border-gray-900 px-4 rounded-xl w-full py-3'
                                                    required
                                                    pattern="/^[A-Z][a-zA-Z-' ]{1,} [A-Z][a-zA-Z-' ]{1,}$/"
                                                    value={message.name}
                                                    onChange={(e: any) => setMessage({ ...message, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="my-3">
                                                <input
                                                    type="email"
                                                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                                                    placeholder='Your email address'
                                                    className='focus:outline-none focus:ring-0 w-full text-gray-200 w-full bg-gray-800 border border-gray-900 px-4 rounded-xl w-full py-3'
                                                    required
                                                    value={message.email}
                                                    onChange={(e: any) => setMessage({ ...message, email: e.target.value })}
                                                />
                                            </div>
                                            <div className="my-3">
                                                <input
                                                    type="tel"
                                                    required
                                                    pattern="^(\+251|251)?(0?9[0-9]{8})$"
                                                    placeholder='Your Phone Number'
                                                    className='focus:outline-none focus:ring-0 w-full text-gray-200 w-full bg-gray-800 border border-gray-900 px-4 rounded-xl w-full py-3'
                                                    value={message.phone}
                                                    onChange={(e: any) => setMessage({ ...message, phone: e.target.value })}
                                                />
                                            </div>
                                            <div className="my-3">
                                                <textarea
                                                    rows={6} placeholder='Write your message here.'
                                                    className='focus:outline-none focus:ring-0 w-full text-gray-200 w-full bg-gray-800 border border-gray-900 px-4 rounded-xl w-full py-3'
                                                    required
                                                    value={message.message}
                                                    onChange={(e: any) => setMessage({ ...message, message: e.target.value })}
                                                />
                                            </div>

                                            <div className="my-4 flex justify-center items-center space-x-2">
                                                {loading ?
                                                    <div role="status" className='ml-3'>
                                                        <svg aria-hidden="true" className="w-6 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                                                        </svg>
                                                        <span className="sr-only">Loading...</span>
                                                    </div>
                                                    : <button
                                                        onClick={submit}
                                                        className="w-full border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
                                                    >
                                                        <span>Request a service</span>
                                                    </button>}
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>
        </>
    )
}