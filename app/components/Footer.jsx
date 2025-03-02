import { assets } from "@/assets/assets"
import Image from "next/image"

const Footer = ({isDarkMode}) => {
    return (
        <div className="mt-20">
            <div className="text-center">
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt="" className="w-36 mx-auto mb-2"></Image>
                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt="email" className="w-6"></Image>
                    yuzhongtao238910@126.com
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-center justify-between border-t
                border-gary-400 mx-[10%] mt-12 py-6
            ">
                <p>
                    © 2025 William Mark. All rights reserved.
                </p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a href="https://github.com/yuzhongtao238910" target="_blank">Github</a>
                    </li>
                    <li>
                        <a href="https://space.bilibili.com/29376336" target="_blank">LinkedIn</a>
                    </li>
                    <li>
                        <a href="#" target="_blank">Twitter</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Footer