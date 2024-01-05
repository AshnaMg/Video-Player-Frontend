import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom'


const Landing = () => {
  return (
    <div>
      <Container className='mt-5 mb-5 d-flex align-items-center justify-content-center'>
        <Row>
          <Col>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam ab optio doloribus cumque voluptate totam. Dolor laboriosam architecto, pariatur ipsa voluptas repellat, nobis animi iste sit non vel ex nulla! Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, officia natus eos, inventore ullam corrupti reiciendis aperiam provident consequuntur laudantium itaque optio dolores eum labore suscipit, distinctio at? Voluptas, odit?</p>
            <Link to='/home'><button className='btn btn-warning mt-3'>Get Started <i className="fa-solid fa-arrow-right"></i></button>
            </Link>
          </Col>
          <Col><img className='ms-5' src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" height='400px' alt="" /></Col>
        </Row>
      </Container>
      <div className='container mb-5'>
        <h3>Features</h3>
        <div className='cards d-flex align-items-center justify-content-evenly mt-5'>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
        <Row>
          <Col><h3 className='text-warning mt-5 mb-5'>Simple and Powerful</h3>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto eum maiores minus totam minima incidunt qui modi ducimus ratione quae rem nemo quod nam nesciunt, eveniet fugiat quo facilis!</p>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto eum maiores minus totam minima incidunt qui modi ducimus ratione quae rem nemo quod nam nesciunt, eveniet fugiat quo facilis!</p>
            <p><span className='fs-5 fw-bolder'>Play Everything: </span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur architecto eum maiores minus totam minima incidunt qui modi ducimus ratione quae rem nemo quod nam nesciunt, eveniet fugiat quo facilis!</p>
          </Col>
          <Col>
            <div className='mt-5'>
              <iframe width="100%" height="400" src="https://www.youtube.com/embed/DEYHzTA8NGw" title="Top Christmas Songs of All Time🎄Christmas Music Playlist, Christmas Carol Music, Christmas Ambience" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Landing