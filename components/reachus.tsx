import React, { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { ArrowUpRightIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'



export default function Reachus({ buttonContent }: any) {
    const [loading, setLoading] = useState(false)
    let [isOpen, setIsOpen] = useState(false)

    const [message, setMessage] = useState<any>({ email: "", phone: "", name: "", subject: "", message: "" })

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    const submit = async () => {

        if (
            message.email != "" &&
            message.phone != "" &&
            message.name != ""

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
                closeModal()
                setLoading(false)
            }
        }


    }

    return (
        <>
            {!isOpen && <button className='w-full' onClick={() => setIsOpen(!isOpen)}>
                {buttonContent}
            </button>}
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative "
                    //  onClose={closeModal}
                    static
                    onClose={() => null}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-gray-900 p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="flex items-center justify-between text-lg py-3 font-medium leading-6 text-gray-200"
                                    >
                                        Reach out experts
                                        <div>
                                            <div
                                                onClick={closeModal}
                                                className='cursor-pointer text-red-600'>
                                                <XMarkIcon className='w-4 h-4' />
                                            </div>
                                        </div>
                                    </Dialog.Title>
                                    <form onSubmit={e => e.preventDefault()}>
                                        <div className="my-3">
                                            <input type="text" placeholder='Your full name'
                                                className='text-gray-200 w-full bg-gray-700 border border-gray-600 px-4 rounded-xl w-full py-3'
                                                required
                                                pattern="/^[A-Z][a-zA-Z-' ]{1,} [A-Z][a-zA-Z-' ]{1,}$/"
                                                value={message.name}
                                                onChange={(e: any) => setMessage({ ...message, name: e.target.value })}
                                            />
                                        </div>
                                        <div className="my-3">
                                            <input type="email" placeholder='Your email address'
                                                className='w-full text-gray-200 w-full bg-gray-700 border border-gray-600 px-4 rounded-xl w-full py-3'
                                                required
                                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
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
                                                className='w-full text-gray-200 w-full bg-gray-700 border border-gray-600 px-4 rounded-xl w-full py-3'
                                                value={message.phone}
                                                onChange={(e: any) => setMessage({ ...message, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="my-3">
                                            <textarea
                                                rows={6} placeholder='Write your message here.'
                                                className='w-full text-gray-200 w-full bg-gray-700 border border-gray-600 px-4 rounded-xl w-full py-3'
                                                required
                                                value={message.message}
                                                onChange={(e: any) => setMessage({ ...message, message: e.target.value })}
                                            />
                                        </div>

                                        <div className="my-4 flex justify-between items-center space-x-2">
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
                                                    className="border border-[#ff4533] rounded-xl bg-[#ff4533] hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3"
                                                >
                                                    <span>Request a service</span>
                                                </button>}
                                            <Link
                                            onClick={closeModal}
                                                href="https://calendly.com/mesfin-tsegaye/codewithmesfin"
                                                target='_blank'
                                                className="flex justify-evenly items-center space-x-2 md:space-x-3 border border-green-600 rounded-xl bg-green-600 hover:bg-gray-800 hover:border-gray-800 text-white px-3 md:px-6 py-3"
                                            >
                                                <span>Book a call</span>
                                                <ArrowUpRightIcon path="right" className="h-4 w-4" strokeWidth={2} />
                                            </Link>
                                        </div>
                                    </form>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}