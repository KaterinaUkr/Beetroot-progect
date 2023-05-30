import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Badge from 'react-bootstrap/Badge';

export const PendingReviews = () =>
	<>
	
	<Card className="col-md-3 mb-3 h-25">
		<Button variant="primary"><FontAwesomeIcon icon={faClipboardList} /></Button>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>Pending Reviews</Card.Title>
        <Card.Text>
          12
        </Card.Text>        
		</Card.Body>
		
		<div>
      </div>
  <ListGroup >
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
>
  <Row>        
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>        
  </Row>
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge bg="primary" pill>
      14
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge bg="primary" pill>
      14
    </Badge>
  </ListGroup.Item>
  <ListGroup.Item
    as="li"
    className="d-flex justify-content-between align-items-start"
  >
    <div className="ms-2 me-auto">
      <div className="fw-bold">Subheading</div>
      Cras justo odio
    </div>
    <Badge bg="primary" pill>
      14
    </Badge>
  </ListGroup.Item>
</ListGroup>


	</Card> 

	
</>