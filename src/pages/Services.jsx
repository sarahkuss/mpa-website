import { Col, Container, Row } from "react-bootstrap";
import "../styles/services.css"

export default function Services() {
  return (
    <>
      <Container className="services-container" fluid>
        <Row className="services-title-row">
          <Col className="services-title-col text-center">
            <h1>Services</h1>
          </Col>
        </Row>

        <Row className="intro-row">
          <Col className="intro-col">
            <h3><strong>Complimentary Introduction Call</strong></h3>
            <p>
              1:1 coaching program <br />
              This complimentary call is where we get to
              know each other. You will have the opportunity to share your
              goals, desires.<br />
              We will also what you feel are the roadblocks that
              are preventing you from living your best life.<br />
              We will explore
              what the next steps are that fit your need and help you achieve
              positive outcomes
            </p>
          </Col>
        </Row>

        <Row className="monthly-row">
          <Col className="monthly-col">
            <h3><strong>Monthly Package</strong></h3>
            <p>
              1:1 coaching <br />
              1X90 minute intake session <br />
              3X50 minutes coaching sessions <br />
              Action plan for the month <br />
              Weekly check in<br />
              $150
            </p>
          </Col>
        </Row>

        <Row className="package-row">
          <Col className="three-col" sm={12} md={6}>
            <h3><strong>3 Month Package</strong></h3>
            <p>
              1:1 coaching<br />
              1 x 90 minute intake session<br />
              8 x 50 minute coaching session<br />
              Weekly action plan<br />
              Weekly email check in<br />
              $275
            </p>
          </Col>
          <Col className="six-col">
            <h3><strong>6 Month Package</strong></h3>
            <p>
              1:1 coaching<br />
              1 x 90 minute intake session<br />
              18 x 50 minute coaching session<br />
              Weekly action plan<br />
              Weekly emails<br />
              $500
            </p>
          </Col>
        </Row>

        <Row className="twelve-row">
          <Col className="twelve-col">
            <h3><strong>12 Week Transformation Course</strong></h3>
            <p>
              1:1 x 12 weeks coaching session<br />
              Workbook included<br />
              Together we will use the techniques and tools from workbook to overcome barriers
              and obstacles.<br />
              Develop an action plan to help meet your goals<br />
              $350
            </p>
          </Col>
        </Row>

        <Row className="description-row">
          <Col className="description-col">
            <p>
              All packages include a 90-minute intake session. This session
              could be compared to an initial visit to your doctor or therapist.
              Through an intake form, you will share your history. We then
              review the form together to determine what your best life looks
              like to you. We will discuss goals and any blockages or barriers
              that arise that are preventing you from enjoying your best life.
              Once we do that, together we will develop an action plan. Over the
              next several weeks or months that we work together, I will be
              guiding you to discover, clarify and align to help you reach your
              goals and your best life. steps are part of the fundamental
              process, but only you can determine how much time, energy and
              resources you have to work on achieving the results you desire.
            </p>
          </Col>
        </Row>

        <Row className="add-title">
          <Col>
            <h3><strong>Add On's to Any Package</strong></h3>
          </Col>
        </Row>

        <Row className="add-row">
          <Col className="add-col-one" sm={12} md={6}>
            <p>
              <strong>
                *Emotional Clearing Method <br />
                2 hours - $100
              </strong>
            </p>
            <p>
              Emotional clearing method session (ECM) combines emotional healing
              techniques and mind body medicine with the stimulation of neural
              pathways to release negative psychological patterns, attachments
              to negative emotions and limiting beliefs on the conscious and
              unconscious levels. EMC is not a discussion; it is an experience.
              With EMC you’ll experience deep relaxation, awareness, acceptance
              and witnessing.
            </p>
          </Col>
          <Col className="add-col-two">
            <p>
              <strong>*Reiki Relaxation and healing session <br />
                30 Minutes - $25 | 1 Hour - $50
              </strong>
            </p>
            <p>
              Session must be in person. <br /> 
              Reiki is a natural form of therapy. It is a healing
              technique that may reduce stress, anxiety, improve sleep and
              lessen pain through light (or no) touch.
            </p>
          </Col>
        </Row>

        <Row>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}
