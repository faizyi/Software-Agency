import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import WorkSection from '../Work Section/WorkSection';
export default function IntroSection() {
  return (
    <>
     <section id="intro" className="d-flex align-items-center py-5 text-center position-relative" 
        style={{ minHeight: '100vh', overflow: 'hidden' }}>
        <video autoPlay loop muted className="position-absolute w-100 h-100" style={{ objectFit: 'cover', zIndex: '-1' }}>
          <source src="/video/background-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4 text-white">NextGen Solutions</h1>
              <p className="lead mb-4 text-white">
                Welcome to Software Agency, where we deliver innovative software solutions to help your business thrive. Let us guide you through the digital transformation journey.
              </p>
              <Button variant="primary" size="lg">Get Started</Button>
            </Col>
          </Row>
        </Container>
      </section>
  <WorkSection/>
  </>
  )
}
