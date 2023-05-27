import './Footer.scss'
import { Container, Navbar} from 'react-bootstrap';

// export const Footer = () => <footer className="footer">
// 	footer staff
// </footer>

export const Footer = () => 
		<Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
					<Navbar.Toggle />
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
            	Signed in as: <a href="#login">Beetroot</a>
          	</Navbar.Text>
       		</Navbar.Collapse>
        </Container>
      </Navbar>
	

 