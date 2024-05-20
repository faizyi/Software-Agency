import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faXTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import FooterSection from '../Footer Section/FooterSection';
export default function ContactSection() {
  return (
    <>
    <section id="contact" className="py-12 bg-gray-100 text-center relative">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Contact Us</h2>
          <div className="flex justify-center">
            <div className="w-full md:w-1/2 lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-700">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                <strong>Email:</strong> info@softwareagency.com
              </p>
              <div className="flex justify-center space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
                  <FontAwesomeIcon icon={faXTwitter} size="2x" />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 transition">
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-900 transition">
                  <FontAwesomeIcon icon={faGithub} size="2x" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterSection/>
      </>
  )
}
