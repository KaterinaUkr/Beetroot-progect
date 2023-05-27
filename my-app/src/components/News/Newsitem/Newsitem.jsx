
import { Card } from 'react-bootstrap';


export const Newsitem = ({urlToImage, content, title}) => 
 
    <Card className='mb-4'>
      <Card.Img variant="top" src={urlToImage} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
         	{content}
        </Card.Text>        
      </Card.Body>
    </Card>



