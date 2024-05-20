import { Navbar, Nav, Container } from 'react-bootstrap';
import Link from 'next/link';
export default function Header() {
  return (
    <div className="fixed w-full z-50">
    <Navbar variant="dark" expand="lg" className="bg-gray-900 p-3">
      <Container className="flex justify-between items-center">
        <Navbar.Brand href="/" className="text-white">NextGen Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto flex space-x-4">
            <Nav.Link href="/" className="text-white">Home</Nav.Link>
            <Nav.Link href="/" className="text-white">Our Work</Nav.Link>
            <Nav.Link href="/" className="text-white">Services</Nav.Link>
            <Nav.Link href="/" className="text-white">Team</Nav.Link>
            <Nav.Link href="/" className="text-white">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}
