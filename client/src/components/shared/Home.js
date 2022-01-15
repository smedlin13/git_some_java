import { Image, Container, Row, Col } from 'react-bootstrap';
const Home = ({}) => (
  <>
    <Container fluid>
      <Row>
        <Col>
    <h1 class='text-center'>Welcome to Git Some Java!</h1>
    <h2 class='text-center'>Your Neighborhood Coffee Shop</h2>
    </Col>
    </Row>
    <Row>
        <Col>
    <div class="text-center">
      <Image src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" alt='coffee' width="400px" />
    </div>
    
    </Col>
    </Row>

    </Container>
  </>
)

export default Home;