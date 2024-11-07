"use client"
import { ArrowPathIcon, ArrowRightCircleIcon, CheckBadgeIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import api from '../lib/api';
import LoadingIndicator from '@/components/loadingIndicator';
import Link from 'next/link';
import { getUserFromLocalStorage } from '../lib/auth';




export default function Setup() {
    const [siteName, setSiteName] = useState<string>("")
    const [siteNameError, setSiteNameError] = useState<boolean>(false)
    const [siteNameAvailable, setSiteNameAvailable] = useState<boolean>(false)
    const [checking, setChecking] = useState<boolean>(false)
    const [site, setSite] = useState({ siteCreated: false, nginxConfigured: false, sslInstalled: false })
    const [siteError, setSiteError] = useState({ siteFailed: false, nginxFailed: false, sslFailed: false })
    const [settingUp, setSettingUp] = useState({ site: false, nginx: false, ssl: false })

    const [user, setUser] = useState<any>()

    useEffect(() => {
        const userString = getUserFromLocalStorage()
        const user = JSON.parse(`${userString}`)
        if (user && user!.id && user!.email)
            setUser(user)
    }, [])

    const checkSiteName = () => {
        setChecking(true)
        const payload = {
            siteName: siteName
        }
        api.create(
            payload, "/check-sitename"
        )
            .then(res => {
                console.log("RES: ", res)
                setSiteNameError(false)
                setSiteNameAvailable(true)
                setChecking(false)
            })
            .catch(err => {
                setSiteNameError(true)
                console.log("Err: ", err)
                setChecking(false)
                setSiteNameAvailable(false)
            })
    }

    const createSite = () => {
        setSettingUp({ ...settingUp, site: true })
        const payload = {
            "siteName": `${siteName}.mevinai.com`,
            "ownerId": user.id,
            "status": "site created",
            "quota": {
                "ram": "2GB",
                "cpu": "2 cores",
                "storage": "20GB",
                "bandwidth": "100GB"
            }
        }
        api.create(payload, "/create-site")
            .then(() => {
                setSite({ ...site, siteCreated: true })
                configureNginx()
                setSettingUp({ ...settingUp, site: false })
            })
            .catch(() => {
                setSiteError({ ...siteError, siteFailed: true })
                setSettingUp({ ...settingUp, site: false })
            })
    }
    const configureNginx = () => {
        setSettingUp({ ...settingUp, nginx: true })
        const payload = { "siteName":`${siteName}.mevinai.com`, }
        api.create(payload, "/configure-nginx")
            .then(() => {
                setSite({ ...site, nginxConfigured: true })
                setupSSLCertificate()
                setSettingUp({ ...settingUp, nginx: false })
            })
            .catch(() => {
                setSiteError({ ...siteError, nginxFailed: true })
                setSettingUp({ ...settingUp, nginx: false })
            })
    }
    const setupSSLCertificate = () => {
        const payload = {
            "siteName": `${siteName}.mevinai.com`,
            "validEmail": user.email
        }
        api.create(payload, "/setup-ssl")
            .then(() => {
                setSite({ ...site, sslInstalled: true })
                setSettingUp({ ...settingUp, ssl: false })
            })
            .catch(() => {
                setSiteError({ ...siteError, sslFailed: true })
                setSettingUp({ ...settingUp, ssl: false })
            })
    }


    return (
        <div className="bg-white w-full">
            <div className='bg-white h-full w-[90%]  mx-auto py-24 md:py-24'>
                <div className='h-screen items-center'>
                    <div>
                        <div className='pb-16'>
                            <h1
                                style={{ lineHeight: 1.3 }}
                                className={`title1 text-center font-extrabold text-3xl md:text-7xl text-[#161c52]`}>
                                Setup your <span
                                    className='italic1 bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 inline-block text-transparent bg-clip-text font-extrabold'>
                                    {" SaaS "}
                                </span> with
                                <span
                                    className='italic1 bg-gradient-to-r from-blue-600 via-blue-600 to-green-600 inline-block text-transparent bg-clip-text font-extrabold'>
                                    {" your own domain "}
                                </span> name
                            </h1>
                        </div>
                        <div className="flex justify-center">
                            <div className='w-[95%] md:max-w-[450px] mx-auto'>
                                <div className="flex items-center space-x-3 border rounded-full px-6 py-2">
                                    <input
                                        type="text"
                                        className="w-full z-0 focus:outline-none py-2 px-3"
                                        placeholder="Domain name"
                                        value={siteName}
                                        onChange={(e: any) => {
                                            setSiteName(e.target.value)
                                            setSiteNameError(false)
                                            setSiteNameAvailable(false)
                                            setChecking(false)
                                        }}
                                    />
                                    <div>
                                        <span className='italic font-normal text-gray-700 text-lg'>.mevinai.com</span>
                                    </div>
                                </div>
                                {siteNameError && !checking && <div className="mt-10 p-3 rounded-lg bg-red-100 flex items-center space-x-2">
                                    <span className='text-red-600'>
                                        <ExclamationCircleIcon className="h-6 w-6" />
                                    </span>
                                    <p className='text-gray-600 text-lg'>The domain name
                                        <Link href={`http://${siteName}.mevinai.com`} target='_blank'>
                                            <span className='px-1 italic text-blue-600'>{siteName}.mevinai.com</span>
                                        </Link>
                                        is already taken by other client.
                                        Try with other unique domain name.
                                        <Link href={`http://${siteName}.mevinai.com`} target='_blank'
                                            className='border-b border-blue-600 text-blue-600 mx-1 italic'>
                                            View the site
                                        </Link>
                                    </p>
                                </div>}
                                {siteNameAvailable && !checking && <div className="mt-10 p-3 rounded-lg bg-green-100 flex items-center space-x-2">
                                    <span className='text-green-600'>
                                        <CheckBadgeIcon className="h-6 w-6" />
                                    </span>
                                    <p className='text-gray-600 text-lg'>Congratulation, the domain name
                                        <span className='italic text-green-600'> {siteName}.mevinai.com </span>
                                        is avaialable.
                                    </p>
                                </div>}
                                <div className='mt-10 flex justify-center'>
                                    {siteNameAvailable ?
                                        <button

                                            onClick={createSite}
                                            className={`w-[90%] md:max-w-[450px] text-lg flex justify-center items-center space-x-1 md:space-x-6 border  rounded-full bg-green-600':'border-blue-600 bg-blue-600 hover:bg-green-500 hover:border-green-500 text-white px-3 md:px-6 py-3`}
                                        >
                                            <span>Continue</span>
                                            <ArrowRightCircleIcon className="h-5 w-5" />
                                        </button>
                                        : <button
                                            disabled={checking}
                                            onClick={checkSiteName}
                                            className={`w-[90%] md:max-w-[450px] text-lg flex justify-center items-center space-x-1 md:space-x-6 border  rounded-full ${checking ? 'bg-green-600' : 'border-blue-600 bg-blue-600 hover:bg-green-500 hover:border-green-500'} text-white px-3 md:px-6 py-3`}
                                        >
                                            {checking ? <LoadingIndicator /> : <ArrowPathIcon className="h-5 w-5" aria-hidden="true" />}
                                            <span>Verify your domain name</span>
                                        </button>}
                                </div>
                                <div className='mt-10 flex justify-center'>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
