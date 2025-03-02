'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Services from "./components/Services"
import Work from "./components/Work";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import { useEffect, useState } from "react";



export default function Home() {

  

  const [isDarkMode, setIsDarkMode] = useState(true)

useEffect(() => {
  if (localStorage.theme === 'dark' || ((!'theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    setIsDarkMode(true)
  } else {
    setIsDarkMode(false)
  }
}, [])

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = ""
    }
  }, [isDarkMode])


  return (
    <>
      <Navbar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
      ></Navbar>
      <Header isDarkMode={isDarkMode}
      ></Header>
      <About isDarkMode={isDarkMode}></About>
      <Services isDarkMode={isDarkMode}> </Services>
      <Work isDarkMode={isDarkMode}></Work>
      <Contact isDarkMode={isDarkMode}></Contact>
      <Footer isDarkMode={isDarkMode}></Footer>
    </>
  );
}
