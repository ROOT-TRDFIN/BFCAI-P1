// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react"
import marketing from "../assets/products/AI-marketing.png"
import agent from "../assets/products/AI-agent.png"
import text from "../assets/products/AI-text.png"
import voice from "../assets/products/AI-voice.png"
import chatbot from "../assets/products/chatbot.png"
import rag from "../assets/products/AI-rag.png"
// import { fetchProductapi } from "/apiService";

const Product = () => {
    return (
        <div className='Our-Products'>
            <div className='about-us-title title text-center'>Our Products </div>
            <h1 className='about-txt-bg'>our products</h1>
            <div className='product-cards'>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={chatbot} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>Chatbot Development</h2>
                        <p>We specialize in developing intelligent chatbots that provide seamless, human-like interactions. Our AI-powered chatbots are designed to handle customer inquiries, automate tasks, and improve user engagement across platforms, ensuring efficient and personalized customer experiences.</p>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={rag} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>RAG in LLM</h2> 
                        <p>We implement Retrieval Augmented Generation (RAG) in Large Language Models (LLM) to enhance content generation by pulling in relevant, up-to-date information. Our RAG-powered solutions offer more accurate, making your AI systems smarter and more reliable.</p>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={text} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>Text to Speech (TTS)</h2>
                        <p>Our Text to Speech (TTS) service converts written text into natural, human-like speech. Ideal for creating voice-overs, accessibility tools, and interactive applications, TTS enhances user experiences by delivering clear and engaging audio content.</p>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={agent} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>Automated AI Agent</h2>
                        <p>Our Automated AI Agent provides intelligent, real-time responses and task automation, designed to streamline workflows and improve customer interactions. From answering queries to executing tasks, our AI agents offer seamless, efficient solutions specified for your business needs.</p>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={voice} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>AI Voice Cloning</h2>
                        <p>Our AI Voice Cloning service replicates human voices with stunning accuracy, allowing you to create personalized audio content. Whether for entertainment, marketing, or customer service, voice cloning delivers highly realistic and customizable vocal outputs that align with your brand or project.</p>
                        </div>
                    </div>
                </div>
                <div className='product-card'>
                    <div className="lines"></div>
                    <div className="imgBx"><img src={marketing} alt="" /></div>
                    <div className="content">
                        <div className="details">
                        <h2>AI Digital Marketing</h2>
                        <p>Our AI Digital Marketing service leverages advanced algorithms to optimize campaigns, targeting the right audience with precision. From personalized content recommendations to data-driven strategies, we enhance your product marketing efforts, ensuring higher engagement and conversion rates.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Product
