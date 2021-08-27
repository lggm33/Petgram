import React from 'react'
import { Card, ListGroup, ListGroupItem, Button } from 'react-bootstrap';
import { useAuth } from '../../context/AuthContext'

function Perfil() {
  const { logOut } = useAuth()

  return (
    <Card style={{ width: '18rem', margin: '0 auto' }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Cras justo odio</ListGroupItem>
        <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
        <ListGroupItem>Vestibulum at eros</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
      <Button variant="outline-dark" onClick={() => logOut() }>Logout</Button>
    </Card>
  )
}

export default Perfil
