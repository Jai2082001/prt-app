import { useEffect, useState } from 'react'
import './Navbar.css'
import {Navbar, Container, NavDropdown, Nav} from 'react-bootstrap'

const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    const [scroll, setScroll ] = useState(false);

    useEffect(()=>{
        const onScroll = () => {
            if(window.scrollY > 50){
                setScroll(true);
            }else{
                setScroll(false);
            }            
        }
        window.addEventListener('scroll', onScroll);

        return () => {
            window.addEventListener('scroll', onScroll);
        }
    })

    return (
    <Navbar expand="lg" className={scroll? "scrolled nav": "nav"}>
      <Container className='navbarContainer'>
        <Navbar.Brand href="#home">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link className={activeLink == 'home' ? 'active navbar-link' : 'navbar-link'} href="#home" onClick = {() => {setActiveLink('home')}}>Home</Nav.Link>
            <Nav.Link className={activeLink == 'skills' ? 'active navbar-link' : 'navbar-link'} href="#skills" onClick = {() => {setActiveLink('skills')}}>Skills</Nav.Link>
            <Nav.Link className={activeLink == 'project' ? 'active navbar-link' : 'navbar-link'} href="#projects" onClick = {() => {setActiveLink('project')}}>Project</Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NavBar;