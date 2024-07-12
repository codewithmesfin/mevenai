
import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function CanBuild() {
    const items = [
        {
            title: "Frontend Web & Mobile",
            subtitle: "I can develop a beautifully designed, simple to use, and trending web app every end users will love.",
            stacks: [
                "React", 'Redux', "Next js", "TypeScript", 'JavaScript', 'Tailwind', "Material Design",
                "GraphQL", "Vue", "Nuxt js", "Vuetify", "Vuex", "Pinia", "React Native", "Redux", "Flutter", "Dart",
                "Provider"
            ]
        },
        {
            title: "Backend technologies",
            subtitle: "I specialize in building backend systems that are designed to scale seamlessly as your user base grows, ensuring a smooth and secure experience for your users.",
            stacks: [
                "Node js", "Nest js", "PHP", "Laravel", "Python", "Django", 'Frappe', "JavaScript", 'TypeScript', "REST API", "GraphQL", "MySQL", "MongoDB", "PostgreSQL", "MariaDB", "Neo 4j"
            ]
        },
        {
            title: "Web3.0",
            subtitle: "Are you looking to innovate with Web3.0? I'm an expert in Solidity, Ethereum, and Polygon, and I can help you develop secure and scalable blockchain systems.",
            stacks: [
                "Ethereum", "Solidity", 'Ethers js', 'Hardhat', 'Web3 js', 'Truffle', "Smart Contract", "DeFi", "DApp", "DAO", "NFT",
                'Web3.dart'
            ]
        },
        {
            title:"Other technologies",
            subtitle: "I can help you develop innovative solutions with Generative AI. My machine learning background ensures efficient and adaptable systems. I can also help you building more.",
            stacks:[
                "Generative AI","ML","Data Analytics","Firebase",
                "API Development","Salesforce", "ERPNext","Odoo",
                "AWS","Google Cloud","Digital Ocean","CI/CD"
            ]
        }
    ]
    return (
        <div
            className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-10 items-center"
        >
            {
                items.map((item) => <div v-for="item in cards" key={item.title}>
                    <div data-aos='zoom-in'
                        data-aos-duration='2000'
                        className="rounded-[20px] p-5 bg-gray-800 hover:bg-gray-800 hover:border hover:border-4 hover:border-gray-700"

                    >
                        <h1 className="text-lg font-semibold text-gray-300">
                            {item.title}
                        </h1>
                        <p className="py-3 text-gray-400 text-sm">
                            {item.subtitle}
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-4">
                            {
                                item.stacks.map((x, j) => <div key={j} className='my-1 flex items-center space-x-2'>
                                    <span className='text-green-600'><CheckCircleIcon className="h-4 w-4" /></span>
                                    <p className='text-sm text-gray-00'>{x} </p>
                                </div>)
                            }
                        </div>
                    </div>
                </div>)
            }
        </div>
    )
}
