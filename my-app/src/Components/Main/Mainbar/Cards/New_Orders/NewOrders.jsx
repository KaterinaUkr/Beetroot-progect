import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

export const NewOrders = () =>
	<Card style={{ width: '18rem' }}>
		<Button variant="primary"><FontAwesomeIcon icon={faShoppingCart} /></Button>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>New Orders</Card.Title>
        <Card.Text>
          12
        </Card.Text>        
      </Card.Body>
	</Card> 
