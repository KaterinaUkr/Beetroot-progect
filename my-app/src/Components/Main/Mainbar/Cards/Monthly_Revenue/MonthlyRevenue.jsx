import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

export const MonthlyRevenue = () =>
	<Card className="col-md-3 mb-3 h-25">
		<Button variant="primary"><FontAwesomeIcon icon={faDollarSign} /></Button>
      {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
      <Card.Body>
        <Card.Title>MonthlyRevenue</Card.Title>
        <Card.Text>
          1385
        </Card.Text>        
      </Card.Body>
    </Card>
	

{/* <div>MonthlyRevenue</div> */}