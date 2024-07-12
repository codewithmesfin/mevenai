/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function Highlights() {
    const items = [
        {
            icon:"https://www.pikpng.com/pngl/b/66-660381_business-icon-company-name-icon-clipart.png",
            title: "7+ companies",
            subtitle: "Worked with 7+ companies as a Frontend, Backend, and Mobile app developer."
        },
        {
            icon:"https://cdn-icons-png.freepik.com/512/7092/7092289.png",
            title: "40+ clients",
            subtitle: "Developed Web based and Mobile apps for 40+ international clients."
        },
        {
            icon: "https://cdn.pixabay.com/photo/2022/01/30/13/33/github-6980894_1280.png",
            title: "80+ Projects",
            subtitle: "Contributed on 80+ Projects from a simple website/app to Web3.0 system."
        },
        {
            icon:"https://secure.webtoolhub.com/static/resources/icons/set30/411f0c45.png",
            title: "Remote working experience",
            subtitle: "Worked on remote basis for global clients for about 3+ years."
        }
    ]
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-10">
            {
                items.map((item, i) => <div key={i}
                >
                    <div>
                        <div className="py-3">
                        <img src={item.icon} alt="item.title"
                            className='rounded-full h-10 w-10'
                        />
                        </div>
                        <h1 className='font-semibold text-gray-300'>{item.title} </h1>
                        <p className='py-2 text-gray-400 text-sm'>{item.subtitle} </p>
                    </div>
                </div>)
            }
        </div>
    )
}
