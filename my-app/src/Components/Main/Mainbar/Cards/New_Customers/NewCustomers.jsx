import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Image from 'react-bootstrap/Image';

export const NewCustomers = () =>
	<>
		<Card className="col-md-3 mb-3 h-25">
			<Button variant="primary"><FontAwesomeIcon icon={faUserPlus} /></Button>
				{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
				<Card.Body>
					<Card.Title>New Customers</Card.Title>
					<Card.Text>
						9
					</Card.Text>        
			</Card.Body>
			
			<div>
			<ListGroup defaultActiveKey="#link1">
					<ListGroup.Item action href="#link1">
						<Row>        
        <Col xs={6} md={4}>
          <Image src="holder.js/171x180" roundedCircle />
        </Col>        
      </Row>
					Link 1
				</ListGroup.Item>
				<ListGroup.Item action href="#link2" disabled>
					Link 2
				</ListGroup.Item>
				<ListGroup.Item action >
					This one is a button
				</ListGroup.Item>
			</ListGroup>
		</div>
		</Card> 
		
	</>
	
		
