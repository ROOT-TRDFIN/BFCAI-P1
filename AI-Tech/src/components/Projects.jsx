import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import rag from "../assets/projects/rag.mp4"
import Slider from "react-slick";
import fp from "../assets/mockups/FP.png"
import pc from "../assets/mockups/PC.png"
import synergist from "../assets/mockups/Synergist.png"
import eeb from "../assets/mockups/EEB.png"
import bfc from "../assets/mockups/bfc.png"
import nexus from "../assets/mockups/nexus.png"
import spices from "../assets/mockups/FP-spices.png"
import blogs from "../assets/mockups/PC-blogs.png"
import consulven from "../assets/mockups/consulven.png"
import stable1 from "../assets/projects/stable1.png"
import stable2 from "../assets/projects/stable2.png"
import stable3 from "../assets/projects/stable3.png"
import stable4 from "../assets/projects/stable4.png"
// Video
import engarb from "../assets/projects/eng-arb.mp4"
import engspn from "../assets/projects/eng-spa.mp4"
import engfrn from "../assets/projects/eng-frn.mp4"
import React, { useEffect, useState } from "react";
// import { fetchPortfolioapi } from "/apiService";

const Mockups = () => {
  // const [data, setData] = useState({});
  //   useEffect(() => {
  //     fetchPortfolioapi().then(setData).catch(console.error);
  //   }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className='mockups-main'>
      <div className='mockups-head'>
        <h1 className='mockup-title title'>Our Portfolio</h1>
        <h1 className='about-txt-bg'>our portfolio</h1>
      </div>
      <div>
      </div>
      <div className="heading">
        <h1 className="heading-text text-center title">Websites</h1>
      </div>
        <div className='mockups-projects'>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={fp}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={pc}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={synergist}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={eeb}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={nexus}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={spices}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={blogs}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={bfc}/>
            </div>
            <div className='mockup-img'>
              <img className='magicBorder mock' src={consulven}/>
            </div>
        </div>
        <div className="heading">
            <h1 className="heading-text text-center title">AI</h1>
          </div>
        <div className="mockups-projects">
          <div className="mockup-img">
          <h2 className="projects-text">Text to Image</h2>
            <Slider {...settings}>
              <div>
                <img className="magicBorder" src={stable1} alt="Slide 1" />
              </div>
              <div>
                <img className="magicBorder" src={stable2} alt="Slide 2" />
              </div>
              <div>
                <img className="magicBorder" src={stable3} alt="Slide 3" />
              </div>
              <div>
                <img className="magicBorder" src={stable4} alt="Slide 4" />
              </div>
            </Slider>
          </div>
            <div className='mockup-img'>
              <video autoPlay loop muted className='magicBorder product-video' src={rag} type="video/mp4"/>
                <h2 className="projects-text">RAG</h2>
            </div>
            <div className='mockup-img'>
            <h2 className="projects-text">Language Translation</h2>
            <Slider {...settings}>
              <div>
                <video autoPlay loop muted className='magicBorder product-video' src={engarb} type="video/mp4"/>
              </div>
              <div>
              <video autoPlay loop muted className='magicBorder product-video' src={engfrn} type="video/mp4"/>
              </div>
              <div>
                <video autoPlay loop muted className='magicBorder product-video' src={engspn} type="video/mp4"/>
              </div>
            </Slider>
            </div>
        </div>

     

    </div>
  )
}

export default Mockups