import { Container, Row, Col, Image } from "react-bootstrap";
import "../styles/benefits.css";
import { useNavigate } from "react-router-dom";

export default function Benefits() {
  const navigate = useNavigate()
  const navigateToServices = () => {
    navigate('/services')
  }
  return (
    <>
      <Container className="benefits-container" fluid>
        <Row>
          <Col className="benefits-title">
            <h1>Benefits</h1>
          </Col>
        </Row>
        <Row className="first-row text-center">
          <Col className="first-row-col">
            <strong>Life coaching is a process of discovery. Discovering who you are,
            your inner gifts, talents, and dreams. Some of these qualities are
            shining through. Some of these qualities may be hidden under
            emotional trauma or mental chatter.</strong>
          </Col>
        </Row>
        <Row className="second-row">
          <Col className="second-col" sm={12} lg={6}>
            <p>
              <strong>As your Integrative Wellness &amp; Life Coach, I will help you
              take actions to work towards and achieve a life that you feel is
              your best life.</strong>
            </p>
          </Col>
          <Col className="third-col">
            <ul>
              <li>Solution centered focus</li>
              <li>Holistic life coaching model</li>
              <li>Mind-body tools &amp; techniques</li>
              <li>Specializing in over 20 healing modalities</li>
              <li>Action plans to achieve permanent behavior change</li>
            </ul>
          </Col>
        </Row>

        <Row>
          <Col className="third-row text-center">
            <h3>
              What is important during this process is your wellness and balance
            </h3>
          </Col>
        </Row>

        <Row className="fourth-row">
          <Col className="fifth-col" sm={12} lg={6}>
            Wellness requires intentional and focused time, energy, thoughts,
            habits, choices and actions which will lead you to wholeness. It is
            supporting and healing all four body systems: mental, emotional,
            physical and spiritual. Balance requires moment to moment
            adjustments, discovering self-love in a nurturing and caring way.
            Wellness and balance go hand-in-hand. Find balance and you will find
            wellness. Find wellness and you will find balance.
          </Col>
          <Col className="sixth-col"> 
            <Image src="images/sunrise2.jpg" fluid className="first-image"/>
          </Col>
        </Row>

        <Row className="fifth-row">
          <Col className="seventh-col" sm={12} lg={6}>
            <Image src="images/dance.png" className="second-image" />
          </Col>
          <Col className="eighth-col">
            An integrative Wellness and life coach is uniquely different than a
            traditional life coach. I am trained in life coaching fundamentals,
            combined with a diverse range of healing modalities. The are of
            focus modalities are mental, emotional, physical and spiritual.
            Using tools, techniques and action plans from a holistic approach. I
            help clients create a meaningful change in their lives. I help you
            gain freedom from the past, overcome harmful habits, and reprogram
            patterns that block you from living your fullest and best life.
          </Col>
        </Row>

        <Row className="sixth-row">
          <Col className="focus-areas">
            <h3>The areas we will focus on are:</h3>
            <ul>
              <li>
                <strong>Mental </strong>
                <br />
                thought life, mental models, self-perception, and mental
                patterns
              </li>
              <li>
                <strong>Emotional</strong> <br />
                Emotions and relationships with self and others
              </li>
              <li>
                <strong>Physical</strong> <br />
                Health or tangible things like career and finances
              </li>
              <li>
                <strong>Spiritual</strong> <br />
                Awareness, self-discovery, connection and spirituality
              </li>
            </ul>
          </Col>
        </Row>

        <Row className="seventh-row text-center">
          <h3>
            Without balance there is no wellness. Without wellness, there is no
            balance. Together we will work to create balance and wellness which
            will help you achieve the life you hope to have, your best life.
          </h3>
        </Row>

        <Row className="benefits-button-row">
          <Col className="benefits-button-col">
            <button className="benefits-button" onClick={navigateToServices}>I am ready to take action</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}
