import {Container,  Row, Col} from 'react-bootstrap'
import ov from  "../assets/OV.svg"
import oc from "../assets/OC.svg"
import wwa from "../assets/WWA.svg"

const About = () => {
  return (
    <Container id='about' className='Aboutus'>
        <Row>
            <Col xs={12} md={12} lg={12}>
            <h1 className='about-us-title title'>about us</h1>
            {/* <h1 className='about-txt-bg'>about \us</h1> */}
            </Col>
            <div className='about-contents'>
                <div className='about-content'>
                  <img src={wwa} className='about-icon' />
                  <h2>Who We are</h2>
                  <p>We are a fully integrated AI solutions provider, specializing in developing intelligent systems for healthcare, finance, education, and other industries. Our expertise spans multiple AI-driven platforms, including machine learning, natural language processing, and automation technologies.</p>
                </div>
                <div className='about-content'>
                  <img src={oc} className='about-icon' />
                  <h2>Our Commitment</h2>
                  <p>We believe in the transformative power of AI to drive innovation and inspire change. Committed to delivering advanced AI solutions, we bring intelligent systems to life, ensuring they adapt to diverse industries and meet the unique needs of our clients.</p>
                </div>
                <div className='about-content'>
                  <img src={ov} className='about-icon' />
                  <h2>Our Vision</h2>
                  <p>Our vision is to become a leading AI solutions provider by consistently setting new benchmarks in the technology industry. With vast AI and machine learning expertise, we transform our clients ideas into innovative, intelligent systems that drive impactful results.</p>
                </div>
            </div>
        </Row>
    </Container>
  )
}

export default About
