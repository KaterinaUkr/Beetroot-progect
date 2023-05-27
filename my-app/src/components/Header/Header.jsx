import './Header.scss'
import { Container, Navbar, Nav} from 'react-bootstrap';

export const Header = ({ children }) => 
	<Navbar bg="dark" variant="dark">
		<Container>
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#home">Home</Nav.Link>
				<Nav.Link href="#features">Features</Nav.Link>
				<Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
		</Container>
	</Navbar>

// export default Header    //якщо без export default, то додаємо в імпорті { Header }

