import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ServicesSection from '../Services Section/ServicesSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
export default function WorkSection() {
  const work = [
    {
      name: "Web Design",
      imgSrc: "/work-img/projects-1.jpg",
      dec : "Creating Website Solutions"
    },
    {
      name: "IT Solution",
      imgSrc: "/work-img/projects-2.jpg",
      dec : "Creating Website Solutions"
    },
    {
      name: "Data Recovery",
      imgSrc: "/work-img/projects-3.jpg",
      dec : "Creating Website Solutions"
    },
    {
      name: "Technology",
      imgSrc: "/work-img/projects-4.jpg",
      dec : "Creating Website Solutions"
    },
    {
      name: "App",
      imgSrc: "/work-img/projects-5.jpg",
      dec : "Creating Website Solutions"
    },
    {
      name: "Development",
      imgSrc: "/work-img/projects-6.jpg",
      dec : "Creating Website Solutions"
    },
  ];
  return (
    <>
      <section id="work" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Work</h2>
          <Row>
            {work.map((project, index) => (
              <Col key={index} md={4}>
                <Card className='mb-4 work-card'>
                  <Card.Img variant="top" src={project.imgSrc} />
                  <Card.Body className="cardBody flex justify-between">
                    <div>
                    <Card.Title className='text-white'>{project.name}</Card.Title>
                    <Card.Text className='text-white'>
                      {project.dec}
                    </Card.Text>
                    </div>
                    <a href="#">
                    <Button variant="link" className="text-white" href={project.link}>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                    </a>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <ServicesSection />
    </>
  )
}
