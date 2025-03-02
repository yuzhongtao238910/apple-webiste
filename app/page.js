'use client'
import About from "./components/About";
import Header from "./components/Header";
import Navbar from "./components/Navbar";


export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
    </>
  );
}
