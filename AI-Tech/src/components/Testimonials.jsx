// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import { Container, Carousel } from 'react-bootstrap';

// Small img
import testi1 from "../assets/testimonials/consulven.jpg";
import testi2 from '../assets/testimonials/EEB Engineering.jpg';
import testi3 from '../assets/testimonials/fp.jpg';
import testi4 from '../assets/testimonials/Nexus.jpg';
import testi5 from '../assets/testimonials/Pc.jpg';
import testi6 from '../assets/testimonials/Synergist.jpg';

// inside lg images
import testiL1 from "../assets/testimonials/consulvenlg.svg";
import testiL2 from "../assets/testimonials/EEBlg.svg";
import testiL3 from "../assets/testimonials/fplg.svg";
import testiL4 from "../assets/testimonials/Nexuslg.svg";
import testiL5 from "../assets/testimonials/Pclg.svg";
import testiL6 from "../assets/testimonials/Synlg.svg";

// images for smaller device
import testiSm1 from "../assets/Clients/EEB.svg";
import testiSm2 from "../assets/Clients/CONSULVEN.svg"
import testiSm3 from "../assets/Clients/FP.svg"
import testiSm4 from "../assets/Clients/NEXUS.svg"
import testiSm5 from "../assets/Clients/PC.svg"
import testiSm6 from "../assets/Clients/SYENRGIST.svg"


const Testimonials = () => {
    const [openImageIndex, setOpenImageIndex] = useState(null);

    const handleClickOutside = (event) => {
        if (!event.target.closest('.testi-img')) {
            setOpenImageIndex(null);
        }
    };

    const toggleImage = (index) => {
        if (openImageIndex === index) {
            setOpenImageIndex(null);
        } else {
            setOpenImageIndex(index);
        }
    };

    useEffect(() => {
        document.body.addEventListener('click', handleClickOutside);
        return () => {
            document.body.removeEventListener('click', handleClickOutside);
        };
    }, []);

    const images = [testi1, testi2, testi3, testi4, testi5, testi6]; // Small images
    const images1 = [testiL1, testiL2, testiL3, testiL4, testiL5, testiL6]; //large img

    return (
        <Container fluid>
            <div className='Testimonials'>
                <div className="headings text-center">
                    <h1 className='title'>Testimonials</h1>
                </div>
                <div className="testimonial-wrapper">
                    <div className="testimonial-parent">
                    {images.map((imageSrc, index) => (
                        <div key={index} className="testi-img" onClick={() => toggleImage(index)}>
                            <img
                                src={imageSrc}
                                alt={`Testimonial ${index + 1}`}
                                className={openImageIndex === index ? 'open' : ''}
                            />
                            {openImageIndex === index && (
                                <div className="overlay">
                                    <img src={images1[index]} alt={`Opened Testimonial ${index + 1}`} />
                                </div>
                            )}
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <div className="testimonials-mv-container">
            <div className="headings text-center">
                    <h1 className='title'>Testimonials</h1>
                </div>
                <Carousel indicators={false}>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src={testiSm1}
                                className="img-circle img-responsive"
                                alt="EEB Engineering"
                            />
                            <p>
                                Developed an outstanding website and landing page for us. 
                                Their design is sleek, user-friendly, and perfectly captures our brand. We&apos;re thrilled with the results. 
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src={testiSm2}
                                className="img-circle img-responsive"
                                alt="Consulven"
                            />
                            <p>
                                Our experience with BFC Tech Media was exceptional. 
                                They built an engaging website for our company Consulven that’s visually appealing, easy to navigate, and optimized for performance. 
                                Thanks to their expertise, we now have a powerful online presence that reflects our brand perfectly!
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src={testiSm3}
                                className="img-circle img-responsive"
                                alt="Fasta Pizza"
                            />
                            <p>
                                 They transformed our digital presence with a modern e-commerce website and an AI chatbot that enhanced our customer service. 
                                 Their innovative solutions have made a real impact on Brand!
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src={testiSm4}
                                className="img-circle img-responsive"
                                alt="Nexus-international"
                            />
                            <p>
                                They developed a professional and user-friendly website for Nexus that aligns seamlessly with our financial services. 
                                The design combines both style and functionality.
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src={testiSm5}
                                className="img-circle img-responsive"
                                alt="Prime-counsel"
                            />
                            <p>
                                Developed an exceptional website, blog page, and web application for us. 
                                Their work is professional, seamless, and truly reflects our vision. Overall the work done by them is amazing. Thank you, team!
                            </p>
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className="testimonial4_slide">
                            <img
                                src={testiSm6}
                                className="img-circle img-responsive"
                                alt="Synergist"
                            />
                            <p>
                                An innovative and unique website was made for our Company - Synergist. 
                                Their design is modern, intuitive, and perfectly aligns with our brand. 
                                We&#39;re extremely pleased with the result!
                            </p>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
}

export default Testimonials;
