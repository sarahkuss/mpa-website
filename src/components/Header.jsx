import { Container, Navbar, Nav } from "react-bootstrap"
import { Link } from "react-router-dom"
import '../styles/header.css'


export default function Header () {
  return(
    <Navbar className="sticky-top" expand="lg">
      <Container className="header-container" fluid>
        <Navbar.Brand as={Link} to='/' className="logo">Mary Pat Adams <br />
        <p className="credentials">Integrative Wellness & Life Coaching</p>
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav>
            <Nav.Link as={Link} to='/benefits'>Benefits</Nav.Link>
            <Nav.Link as={Link} to='/services'>Services</Nav.Link>
            <Nav.Link as={Link} to='/about'>About</Nav.Link>
            <Nav.Link as={Link} to='/contact' id="contact-button">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}