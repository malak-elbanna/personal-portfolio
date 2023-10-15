import { Navbar, Nav, Container } from "react-bootstrap";
import { useState, useEffect } from "react";


import logo from '../assets/imgs/logo.svg';
import github from '../assets/imgs/github.svg';
import linkedin from '../assets/imgs/linkedin.svg';

import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const NavBar = () => {

  const [active, setActive] = useState('Home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActive = (value) => {
    setActive(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className={active === 'Home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('Home')}>Home</Nav.Link>
              <Nav.Link href="/#skills" className={active === 'Skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('Skills')}>Skills</Nav.Link>
              <Nav.Link href="/#projects" className={active === 'Projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('Projects')}>Projects</Nav.Link>
              <Nav.Link href="/#poems" className={active === 'Creative Writing' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('Projects')}>Poems</Nav.Link>
              <Nav.Link href="https://shorturl.at/tCW08" className={active === 'Resume' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActive('Resume')}>Resume</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/malak-elbanna"><img src={github} alt="github" /></a>
                <a href="https://www.linkedin.com/in/malak-elbanna/"><img src={linkedin} alt="linkedin" /></a>
              </div>

              <HashLink to='#connect'>
                <button className="vvd"><span>Connect with me</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}