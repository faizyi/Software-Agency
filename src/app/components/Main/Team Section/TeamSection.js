import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import ContactSection from '../Contact Section/ContactSection';
import Image from 'next/image';
const teamMembers = [
  {
    name: "Thoren Okendhild",
    role: "UI/UX Designer",
    imgSrc: "/mem-img/guide-md4.png"
  },
  {
    name: "Steve Rogers",
    role: "Animation Engineer",
    imgSrc: "/mem-img/guide-4.png"
  },
  {
    name: "Gambly Mateo",
    role: "Graphics Designer",
    imgSrc: "/mem-img/guide-md8.png"
  },
  {
    name: "Theodore Aiden",
    role: "Software Engineer",
    imgSrc: "/mem-img/guide-md9.png"
  },
  {
    name: "Sebastian Mateo",
    role: "Web Developer",
    imgSrc: "/mem-img/guide-md11.png"
  },
  {
    name: "Lotus Anthony",
    role: "Cloud Engineer",
    imgSrc: "/mem-img/guide-md13-1.png"
  },
];
export default function TeamSection() {
  return (
    <>
  <section id="team" className="py-5">
        <Container>
          <h2 className="text-center mb-4">Our Team</h2>
          <Row>
            {teamMembers.map((member, index) => (
              <Col key={index} md={4} className="mb-4">
                <Card className="card-hover border-0">
                  <Card.Img variant="top" src={member.imgSrc} />
                  <div className="card-overlay">
                    <div>
                      <h5 className='text-black'>{member.name}</h5>
                      <p className='text-black'>{member.role}</p>
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <ContactSection/>
      </>
  )
}
