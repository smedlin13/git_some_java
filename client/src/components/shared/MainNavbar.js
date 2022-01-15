import { AuthConsumer } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

const MainNavbar = ({ user, handleLogout }) => {

  const rightNavItems = () => {


    // links will display when the use is logged in
    if (user) {
      return (
        <>
          <Nav.Link>
          <Link to='/menus'>
              Menu
          </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to='/rewards'>
              Rewards
          </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to='/blogs'>
              Blogs
          </Link>
          </Nav.Link>
          <Nav.Link onClick={ () => handleLogout() }>
            Logout
          </Nav.Link>
         
        </>
      )
    } else {
      // links that will display when not login
      return (
        <>
          <Nav.Link>
          <Link to='/login'>
              Login
          </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to='/register'>
              Register      
          </Link>
          </Nav.Link>
        </>
      )
    }
  }

  return (
    <>
   
          {/* these links here show up with or without the use being login */}
          <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>
            <Link to="/">
            Git Some Java!
            </Link>
            </Navbar.Brand>
            <Nav className="me-auto">
          { rightNavItems() }
            </Nav>
          </Container>
          </Navbar>

    </>
  )
}

const ConnectedNavbar = (props) => (
  <AuthConsumer>
    { value => <MainNavbar {...props} {...value} />}
  </AuthConsumer>
)

export default ConnectedNavbar;










