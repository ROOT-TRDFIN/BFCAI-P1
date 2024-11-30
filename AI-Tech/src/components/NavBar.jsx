
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from "react-bootstrap";
import { useEffect, useState } from 'react';
import logo from '../assets/BFC LOGO.png'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [show, setShow] = useState(false);
    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setShow(true);
            }
            else { setShow(false);
            }
        }
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener("scroll", onScroll)
    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
  return (
        <Navbar expand="lg" className={show ? "show" : ""}>
          <Container xs={12} md={6} xl={12} lg={12} className='navbarmain' fluid>
            <Navbar.Brand className='navbar-logo' href="#home">
              <a href="/"><img src={logo} alt="logo" className='logo' /></a>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className='mob-nav' />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="navbar-nav">
                <Nav.Link href="/" className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>home&nbsp;❤️</Nav.Link>
                <Nav.Link href="/serviceMain" className={activeLink === 'service' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ourservice')}>services&nbsp;💥</Nav.Link>
                <Nav.Link href="/products" className={activeLink === 'products' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ourproducts')}>products&nbsp;☠️</Nav.Link>
                <Nav.Link href="/projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Portfolio&nbsp;👀</Nav.Link>
                <Nav.Link href="/contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contact')}>Connect&nbsp;☎️</Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className='d-flex align-items-center'>
                  <a href="https://billionairefrequencycode.com/" target='_blank' ><i className='fa fa-mug-hot fa-lg me-3'></i>Our&nbsp;Media&nbsp;Center</a>
                </div>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
    }
    
export default NavBar;