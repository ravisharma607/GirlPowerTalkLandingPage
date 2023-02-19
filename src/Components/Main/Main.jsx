import React from 'react'
import About from '../About Us/About'
import Cards from '../Cards/Cards'
import Culture from '../Culture/Culture'
import Family from '../Family/Family'
import Featured from '../Featured Carousel/Featured'
import Footer from '../Footer/Footer'
import HaveFun from '../HaveFun/HaveFun'
import Home from '../Home/Home'
import Info from '../Info Section/Info'
import Latest from '../Latest/Latest'
import Movement from '../Movement/Movement'
import Navbar from '../Navbar/Navbar'
import Partners from '../Our Partners/Partners'
import VideoCards from '../Video Cards/VideoCards'
import Vision from '../Vision/Vision'
import YourStory from '../Your Story/YourStory'

const Main = () => {
  return (
    <>
    <Navbar />
    <Home />
    <Featured />
    <About />
    <Vision />
    <Movement />
    <Cards />
    <HaveFun />
    <VideoCards />
    <Family />
    <Culture />
    <Latest />
    <YourStory />
    <Info />
    <Partners />
    <Footer />
    </>
  )
}

export default Main