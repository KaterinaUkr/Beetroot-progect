import { Container, Navbar, Nav } from 'react-bootstrap';

export const Header = () =>
	
	 <Container>
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
				<Navbar.Brand href="#">Posters Galore</Navbar.Brand>
				<Nav className="me-auto">
					<Nav.Link href="#home">Home</Nav.Link>
					<Nav.Link href="#features">Features</Nav.Link>
					<Nav.Link href="#pricing">Pricing</Nav.Link>
				</Nav>
        </Container>
      </Navbar>
    </Container>
	


	