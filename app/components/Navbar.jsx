import { assets } from '@/assets/assets'
import React, { useRef} from 'react'
import Image from "next/image"

const Navbar = () => {

    const sideMenuRef = useRef()

    const openMenu= () => {
        sideMenuRef.current.style.transform = "translateX(-16rem)"
    }
    const closeMenu= () => {
        sideMenuRef.current.style.transform = "translateX(16rem)"
    }
  return (
    <>
        <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]">
            <Image priority={true} src={ assets.header_bg_color } alt="背景"></Image>
        </div>
        <nav className="w-full fixed px-5 lg:px-8 xl:px-[8%] py-4
            flex items-center justify-between z-50
        ">
            <a href="#top">
                <Image src={assets.logo} className="w-28 cursor-pointer mr-14" alt="logo"></Image>
            </a>
            {/* md:flex 是一个响应式类，用于在中等屏幕尺寸及以上应用 Flexbox 布局。 */}
            <ul className="hidden md:flex items-center gap-6 lg:gap-8
                rounded-full px-12 py-3 bg-white shadow-sm bg-opacity-50
            ">
                <li><a className="font-Ovo" href="#top">Home</a></li>
                <li><a className="font-Ovo" href="#about">About me</a></li>
                <li><a className="font-Ovo" href="#services">Services</a></li>
                <li><a className="font-Ovo" href="#work">My Work</a></li>
                <li><a className="font-Ovo" href="#top">Contact me</a></li>
            </ul>
            <div className="flex items-center gap-4">
                <button>
                    <Image src={assets.moon_icon} alt="月亮" className="w-6"></Image>
                </button>
                <a href="#contact" className="hidden lg:flex items-center gap-3 px-10 py-2.5
                    border border-gray-500 rounded-full ml-4 font-Ovo 
                ">
                    Contact
                    <Image src={assets.arrow_icon} className="w-3" alt="箭头"></Image>    
                </a>
                <button className="block md:hidden ml-3" onClick={openMenu}>
                    <Image src={assets.menu_black} alt="月亮" className="w-6"></Image>
                </button>
            </div>

            {/* mobile menu */}
            <ul ref={sideMenuRef} className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500">
                <div className="absolute right-6 top-6" onClick={closeMenu}>
                    <Image src={assets.close_black} alt="关闭" className="w-5 cursor-pointer"></Image>
                </div>
                <li><a className="font-Ovo" href="#top" onClick={closeMenu}>Home</a></li>
                <li><a className="font-Ovo" href="#about" onClick={closeMenu}>About me</a></li>
                <li><a className="font-Ovo" href="#services" onClick={closeMenu}>Services</a></li>
                <li><a className="font-Ovo" href="#work" onClick={closeMenu}>My Work</a></li>
                <li><a className="font-Ovo" href="#top" onClick={closeMenu}>Contact me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
