import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
export default function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <footer className="bg-gray-900 text-light py-3">
      <Container>
        <div className="text-center flex justify-between">
          <p className='texy'>&copy; 2024 Software Agency. All rights reserved.</p>
          <FontAwesomeIcon 
            icon={faArrowUp} 
            size="2x" 
            className="text-white mt-2 cursor-pointer" 
            onClick={scrollToTop} 
          />
        </div>
      </Container>
    </footer>
  )
}
