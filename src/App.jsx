import { useEffect, useRef } from "react"

import LocomotiveScroll from "locomotive-scroll"

import Hero from "./Components/Hero"
import Navbar from "./Components/Navbar"
import Page2 from "./Components/Page2"
import Page3 from "./Components/Page3"
import Page4 from "./Components/Page4"
import Page6 from "./Components/Page6"
import Page5 from "./Components/page5"
import './css/locomotive-scroll.css'

const App = () => {
  const scrollRef = useRef(null)

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el:scrollRef.current,
      smooth:true,
    })
    return () => {
      scroll.destroy();
    }
  },[])

  return (
    <>
    <div id="main" ref={scrollRef} className="scroll-container">
      <Navbar />
      <Hero />
      <Page2 />
      <Page3/>
      <Page4/>
      <Page5/>
      <Page6/>
      </div>


    </>

  )
}

export default App