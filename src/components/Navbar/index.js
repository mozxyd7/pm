import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../App.css';

function CollapsibleExample() {
  return (
    <Navbar className='navBarBackGroundColor' collapseOnSelect expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Plot Market</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <NavDropdown className='navBarLink' title="Our Projects" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#projects/micro">Micro</NavDropdown.Item>
              <NavDropdown.Item href="#projects/mini">Mini</NavDropdown.Item>
              <NavDropdown.Item href="#projects/mega">Mega</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#projects/future">Future Projects</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='navBarLink' href="#about">About Us</Nav.Link>
            <Nav.Link className='navBarLink' href="#team">Team</Nav.Link>
            <Nav.Link className='navBarLink' eventKey={2} href="#register">
              Register
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;