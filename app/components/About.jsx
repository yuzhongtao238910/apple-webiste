import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
        <h4 className="text-center mb-2 text-lg font-Ovo">Introduction</h4>
        <h2 className="text-center text-5xl font-Ovo">About me</h2>

        <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
            <div className="w-64 sm:w-80 rounded-3xl max-w-none">
                <Image src={assets.user_image} alt="user" className="w-full rounded-3xl"></Image>
            </div>
            <div className="flex-1">
                <p
                    className="mb-10 max-w-2xl font-Ovo"
                >I am an experienced Frontend Developer with over a decade og professional expertise in the field. Throughout my career, I have had the privilege of collaborating
    with prestigious organizations, contributing to their success and growth
    </p>
                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {
                            infoList.map(({icon, iconDark, title, description}, idx) => {
                                return (
                                    <li key={idx} className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                                        hover:bg-lightHover
                                        hover:-translate-y-1
                                        duration-500
                                        hover:shadow-black
                                    ">
                                        <Image src={icon} alt={title} className="w-7 mt-3"></Image>
                                        <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                                        <p className="text-gray-600 text-sm">{description}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <h4>Tools I use</h4>
                    <ul>
                        {
                            toolsData.map((tool, idx) => {
                                return (
                                    <li key={idx}>
                                        <Image src={tool} alt="Tool" className="w-5 sm:w-7"></Image>
                                    </li>
                                )
                            })
                        }
                    </ul>
            </div>
        </div>
    </div>
  )
}
