import Card from 'react-bootstrap/Card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
// import imgAbout from '.About';

export const About = () =>
 <Card className="col-md-5">
      <Card.Img variant="top" src='../../public/Images/About.jpg' />
      <Card.Body>
        <Card.Title>Welcome to react-admin demo</Card.Title>
        <Card.Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Card.Text>
      </Card.Body>      
      <Card.Body>
        <FontAwesomeIcon icon={faHome} /> <Card.Link href="#"> React-admin site</Card.Link> 
        <FontAwesomeIcon icon={faAngleLeft} /><FontAwesomeIcon icon={faAngleRight} /> <Card.Link href="#">Source for this demo</Card.Link>
      </Card.Body>
  </Card>

// src = "../Components/Images/About.jpg" 