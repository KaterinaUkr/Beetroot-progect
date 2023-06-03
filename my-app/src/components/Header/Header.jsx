import { Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  
  const navigate = useNavigate();

  const navigateHandler = (event, to) => {
    event.preventDefault();
    navigate(to)
  }

  return (
    
    <Container>
      <Nav>
        
        <Nav.Link onClick={(event) => navigateHandler(event, './')}>Main</Nav.Link>
        <Nav.Link href={"/Sidebar"}>Sidebar</Nav.Link>
        <Nav.Link href={"/DataTable"}>DataTable</Nav.Link>
        <Nav.Link href={"/DataTableClosed"}>DataTableClosed</Nav.Link>
      </Nav>

    </Container>


      
      
  );
}
