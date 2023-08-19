import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/about.css"

export default function About() {
  return (
    <>
      <Container className="about-container" fluid>
        <Row>
          <Col className="about-title text-center">
            <h1>About</h1>
          </Col>
        </Row>

        <Row className="about-row">
          <Col className="image-col" sm={12} md={6}>
            <Image src="images/MaryPat2.png" className="mpa-image" />
          </Col>
          <Col className="about-col">
            <p>
              Hello, my name is Mary Pat Adams. I am an RN, BSN and a certified
              Integrative Wellness &amp; Life Coach, level II Reiki healing
              provider and certified herbalist.
            </p>
          </Col>
        </Row>

        <Row className="more-info-row">
          <Col className="more-info-col">
            <p>
              During our life time, we all have moments that cause us to pause
              and ask ourselves, “What’s next?” (Or – say: What are your life
              transition moments that have caused you to pause and wonder what’s
              next?)
            </p>
            <p>
              This could be when you know your current career isn’t fulfilling
              your purpose, maybe your children are grown and now you are
              wondering, what’s next for you? you have been through a life
              changing event that has shifted your life. Or you are just
              wondering, how can I create my best life.
            </p>
            <p>
              I get it, I’ve been there. I have changed careers going from an
              office manager, to enrolling in nursing school in my 30’s while
              raising a 2-year-old, as a single mom. After 25 years in nursing,
              pursued a new path as a wellness &amp; life coach.
            </p>
            <p>
              I, too, have thought “what’s next” after my divorce, after my
              child has grown and left for a life of her own. In the middle of a
              career that wasn’t serving my passion, on days when I am driving
              in the car, I wonder, is this it, what’s next, when my parent
              passed away or looking towards retirement wondering how do I build
              the life that pursues my dreams and fills my purpose.
            </p>
            <p>
              Through all the transitions in my life, I sought my purpose, lived
              my passion and created my best life. That is what I am here to
              help you do.
            </p>
            <p>
              Through my extensive nursing career, my life coaching training and
              my life experience. I can help you achieve your best life.
            </p>
            <p>
              I’m here to help you break through obstacle that seem to be
              holding you back in life. Life is too short to be unhappy, unsure
              or unfulfilled. Let me guide you to learn and develop better ways
              to handle issues that are standing in the way of your goals. To
              help you create you best life.
            </p>
          </Col>
        </Row>

        <Row >
          <Col className="iwa">
            <Image src="images/iwa.jpg" className="iwa-image"/>
          </Col>
        </Row>

        <Row className="empty"></Row>
      </Container>
    </>
  );
}
