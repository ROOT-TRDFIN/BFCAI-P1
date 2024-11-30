
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import servicebg from "../assets/blackbg.jpg"

import token from "../assets/service/Tokenization.png"
import ico from "../assets/service/ICO.png"
import bc from "../assets/service/blockchain.png"

import PropTypes from 'prop-types';

const FlipCard = ({ firstImage, secondImage, description, subtitle }) => {
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

const Blockchain = () => {
  return (
    <div className='website-main my-5'>
         <div className='website-head'>
            <h1 className='title'>BLOCKCHAIN</h1>
        </div>
    <div className="centerflipcards my-5">
       
    <FlipCard
        firstImage={token}
        secondImage={servicebg}
        description="Convert physical or digital assets into blockchain-based tokens, offering secure ownership, transparency, and streamlined asset management across industries. Tokenization unlocks liquidity for traditionally illiquid assets and simplifies fractional ownership. It paves the way for new opportunities in real estate, art, and intellectual property."
      />
      <FlipCard
        firstImage={ico}
        secondImage={servicebg}
        description="Facilitating ICO launches with comprehensive support, from smart contract creation to direct listing on decentralized exchanges (DEX), granting access to global investor networks. We handle all technical, legal, and marketing aspects of the ICO process. With our expertise, your project is positioned for success from launch to listing."
      />
     <FlipCard
        firstImage={bc}
        secondImage={servicebg}
        description="Establishing robust blockchain infrastructure for enterprises, providing a decentralized platform designed for secure transactions, data integrity, and operational efficiency. Our solutions promote trust and transparency within supply chains, finance, and healthcare. We ensure seamless integration with existing systems, driving productivity and cost savings."
      />
      <div className="clearfix"></div>
     
    </div>
    </div>
  )
}

export default Blockchain