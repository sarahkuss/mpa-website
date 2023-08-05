import { Container, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import "../styles/homepage.css"



export default function Homepage () {
  const videoUri = process.env.PUBLIC_URL + '/images/walking.mp4'
  const navigate = useNavigate()
  const navigateToBenefits = () => {
    navigate('/benefits')
  }
  return (
    <>
      <Container fluid>
        <Row d-flex justify-content-center>
          <Col xs={11}
            md={{offset:6, span:6}}
            lg={{offset:7, span:4}}>
            <div className="video-container">
              <video autoPlay muted loop>
                <source src={videoUri} type="video/mp4" />
              </video>
            </div>

            <div className="video-content">
              <p>Sometimes the smallest step <br />
                In the right direction <br />
                ends up being the biggest <br />
                step of your life. <br />
                Tiptoe if you must, but <br />
                </p>
              <button onClick={navigateToBenefits} className="step-button">Take a Step</button>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}