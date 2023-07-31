import { Container, Row, Col } from "react-bootstrap";
import '../styles/benefits.css'

export default function Benefits () {
  return (
    <>
    <Container className="bg-primary" fluid>
      <Row><Col className="benefits-title"><h1>Benefits</h1></Col></Row>
      <Row >
        <Col className="bg-warning">sdfs</Col>
        <Col className="bg-danger"></Col>
      </Row>
      
      <Row>
        <Col className="bg-success">lskjdfsl</Col>
      </Row>
      
      <Row>
        <Col className="bg-danger">fsd</Col>
        <Col className="bg-warning">sdfs</Col>
      </Row>
    </Container>
    </>
  )
}