import { Col, Container, Image, Row } from "react-bootstrap";
import '../styles/contact.css'


export default function Contact () {
  return (
    <>
      <Container className="contact-container" fluid>
        <Row>
          <Col>
            <h1 className="contact-title text-center">Contact</h1>
          </Col>
        </Row>

        <Row>
          <Col className="contact-col text-center">
            <p>Hours flexible to meet your schedule</p>
            <p><strong>Questions?</strong><br /> 
            <a href="mailto:mpa-yourbestlife.coach@outlook.com" target="_blank" rel="noreferrer">mpa&#8209;yourbestlife.coach@outlook.com</a>
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="contact-image-col">
          <Image src="images/nevergiveup.jpg" fluid className="contact-image" />
          </Col>
        </Row>
      </Container>
    </>
  )
}