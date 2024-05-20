import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import TeamSection from '../Team Section/TeamSection';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
export default function ServicesSection() {
  const services = [
    {
      name: "Software Development",
      imgSrc: "/services-img/software-development.png"
    },
    {
      name: "Web Design",
      imgSrc: "/services-img/Web Design.png"
    },
    {
      name: "App Design",
      imgSrc: "/services-img/App Design.png"
    },
    {
      name: "Graphic Design",
      imgSrc: "/services-img/Graphic Design.png"
    },
    {
      name: "Video Animation",
      imgSrc: "/services-img/Video Animation.png"
    },
    {
      name: "UI/UX Design",
      imgSrc: "/services-img/ux-design.png"
    },
  ];
  return (
    <>
   <section id="services" className="py-5 bg-gray-900">
        <Container>
          <h2 className="text-center text-white mb-4">Our Services</h2>
          <Row>
            {services.map((service, index) => (
              <Col key={index} md={4}>
                <div className="card-hover-effect">
                  <Card className="mb-4 p-20 card-hover">
                    <Image
                      src={service.imgSrc}
                      alt={service.name}
                      width={100}
                      height={50}
                      className="mx-auto mt-4"
                    />
                    <Card.Body className="card-overlay text-center">
                      <Card.Title>{service.name}</Card.Title>
                      <Card.Text className='text-black'>
                        Interdum et malesuada fames ac ante ipsum 
                        primis in faucibus. Etiam eu nibh elementum, 
                        accumsan ona neque ac, aliquet nunc.
                      </Card.Text>
                      <a href="#" className="text-decoration-none text-primary">
                        Learn More <FontAwesomeIcon icon={faArrowRight} />
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
  <TeamSection/>
  </>
  )
}
