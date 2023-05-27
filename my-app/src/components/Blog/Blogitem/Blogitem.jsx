import { Card } from 'react-bootstrap';

// export const Blogitem = ({ title, body, id }) => <div className="blog-item">
// 	<h2>{ id }</h2>
// 	<h3>{title}</h3>
// 	<div>{ body}</div>
// </div>


export const Blogitem = ({ title, body }) => (
  <Card className="mb-4" role="button">
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {body}
      </Card.Text>
        
    </Card.Body>
  </Card>
);
	

