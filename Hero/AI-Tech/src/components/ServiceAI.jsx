// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import servicebg from "../assets/blackbg.jpg"

import nlp from "../assets/service/NLP.png"
import sa from "../assets/service/Sentimental-Analysis.png"
import sd from "../assets/service/Stablediffuion.png"

import PropTypes from 'prop-types';

const FlipCard = ({ firstImage, secondImage, description }) => {
  const [bgImage1, setBgImage1] = useState('');
  const [bgImage2, setBgImage2] = useState('');

  useEffect(() => {
    // Set the background images when component mounts
    setBgImage1(firstImage);
    setBgImage2(secondImage);
  }, [firstImage, secondImage]);

  return (
    <div className="square-flip">
      <div className="square" style={{ backgroundImage: `url(${bgImage1})` }}>
        <div className="flip-overlay"></div>
      </div>
      <div className="square2" style={{ backgroundImage: `url(${bgImage2})` }}>
        <div className="square-container2">
          <div className="align-center"></div>
          <h3 className="textshadow">{description}</h3>
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

const AI = () => {
  return (
    <div className='website-main'>
         <div className='website-head'>
            <h1 className='title'>AI</h1>
        </div>
    <div className="centerflipcards">
       
    <FlipCard
        firstImage={nlp}
        secondImage={servicebg}
        description="We offer advanced Natural Language Processing services, including text summarization, translation, text-to-speech, and text generation. Our AI-powered solutions help businesses process large amounts of data, convert text into different formats, and generate human-like responses for seamless interaction."
      />
      <FlipCard
        firstImage={sa}
        secondImage={servicebg}
        description="Our sentiment analysis service deciphers the emotions behind the text, allowing businesses to gain valuable insights into customer opinions, feedback, and trends. We help you understand the tone of conversations and make data-driven decisions that improve customer experiences."
      />
     <FlipCard
        firstImage={sd}
        secondImage={servicebg}
        description="Our advanced Stable Diffusion technology turns your text into stunning images and 3D models. Whether you need creative visuals for marketing or detailed 3D models for product design, our AI generates visually compelling results based on simple text input."
      />
       
      <div className="clearfix"></div>
     
    </div>
    </div>
  )
}

export default AI