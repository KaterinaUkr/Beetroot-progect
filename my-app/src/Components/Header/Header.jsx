import { Container, Navbar, Nav } from 'react-bootstrap';
import './Header.scss';

// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRedo, faUserCircle, faBars } from '@fortawesome/free-solid-svg-icons'



// const element = <FontAwesomeIcon icon={faCoctail} /> ReactDOM.render(element, document.body)

export const Header = () =>
	
	
	<Navbar expand="lg" variant="light" bg="primary" className='header'>			
		<Container >
			<Nav className="me-auto">
					<Nav.Link href="#home"><FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} /></Nav.Link>							
			</Nav>
			<Navbar.Brand href="#">Posters Galore</Navbar.Brand>
			<Nav className="me-auto">
					<Nav.Link href="#home"><FontAwesomeIcon icon={faRedo} style={{color: "#ffffff",}} /></Nav.Link>
					<Nav.Link href="#features"><FontAwesomeIcon icon={faUserCircle} style={{color: "#ffffff",}} /></Nav.Link>					
			</Nav>
		</Container>
	</Navbar>
	
	


	