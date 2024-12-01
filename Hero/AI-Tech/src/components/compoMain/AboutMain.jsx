import Banner from '../Banner'
import About from '../About'
import Testimonials from '../Testimonials'
import Clients from '../Clients'
import TechStacks from '../TechStracks'
import Process from '../Process'
import OurService from '../OurService'
// import React, { useEffect, useState } from "react";
// import { fetchAboutMain } from "/apiService";

const AboutMain = () => {
  return (
    <>
    <Banner/>
    <About />
    <OurService />
    <Process />
    <TechStacks />
    <Testimonials />
    <Clients />
    </>
  )
}

export default AboutMain
