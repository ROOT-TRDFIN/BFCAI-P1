
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
// Banner
import webbanner from "../assets/service/Website.png"
import ecombanner from "../assets/service/E-com.png"
import webappbanner from "../assets/service/Webapp.png"
import uiuxbanner from "../assets/service/uiux.png"
import landingpages from "../assets/service/Landing-Pages.png"
import webmaintainance from "../assets/service/Web-Maintanance.png"
import PropTypes from 'prop-types';


import servicebg from "../assets/blackbg.jpg";

const FlipCard  = ({ firstImage, secondImage, description, subtitle }) => {
  const [bgImage1, setBgImage1] = useState('');
  const [bgImage2, setBgImage2] = useState('');

  useEffect(() => {
    setBgImage1(firstImage);
    setBgImage2(secondImage);
  }, [firstImage, secondImage]);

  return (
    <div className="square-flip">
      <div className="square" style={{ backgroundImage: `url(${bgImage1})` }}>
        <div className="square-container">
          <div className="align-center">
            <img src="http://titanicthemes.com/files/flipbox/kallyas2.png" className="boxshadow" alt="" />
          </div>          
        </div>
        <div className="flip-overlay"></div>
      </div>
      <div className="square2" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className="square-container2">
          <div className="align-center"></div>
          <h3 className="textshadow">{description}</h3>
            <h2 className="textshadow">{subtitle}</h2>
        </div>
        <div className="flip-overlay"></div>
      </div>
    </div>
  );
};

FlipCard.propTypes = {
  firstImage: PropTypes.string.isRequired,
  secondImage: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
};


const Website = () => {
  return (
    <div className='website-main'>
         <div className='website-head'>
            <h1 className='title'>WEBSITES</h1>
        </div>
    <div className="centerflipcards">
       
      <FlipCard
        firstImage={uiuxbanner}
        secondImage={servicebg}
        description="Offering expert web designing services that combine intuitive UI/UX design, creating visually appealing and user-friendly websites. We design engaging digital experiences exclusively for your brand and target audience."
      />
      <FlipCard
        firstImage={ecombanner}
        secondImage={servicebg}
        description="Specializing in e-commerce website development, we create seamless, secure, and scalable online stores. Our solutions provide an exceptional shopping experience with easy navigation, user-friendly interfaces, and integrated payment gateways."
      />
     <FlipCard
        firstImage={webappbanner}
        secondImage={servicebg}
        description="Building bespoke web applications designed for efficiency, scalability, and optimal user engagement, tailored to meet the specific requirements of your business and enhance operational workflows."
      />
        <FlipCard
        firstImage={webbanner}
        secondImage={servicebg}
        description="Developing responsive, secure, and high-performing websites using advanced technologies, Assuring a strong digital presence that drives your business goals and delivers a seamless user experience."
      />
        <FlipCard
        firstImage={landingpages}
        secondImage={servicebg}
        description="Creating conversion-focused landing pages with clear messaging and strategic calls-to-action, focusing to maximize engagement and optimize your marketing campaigns."
      />
       <FlipCard
        firstImage={webmaintainance}
        secondImage={servicebg}
        description="Providing proactive web maintenance services that make sure your website remains secure, up-to-date, and performs flawlessly, minimizing downtime and keeping your business running smoothly."
      />
      <div className="clearfix"></div>
    </div>
    </div>
  )
}

export default Website