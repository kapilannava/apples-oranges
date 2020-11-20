import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from './Navigation.module.css';
function Navigation(){
return (

<Navbar expand="lg" variant="light" bg="dark">
<Navbar.Brand href="#" className={styles.navbar_Logo}>
    <img
        src="/logo.png"
        width="125"
        height="50"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link className={styles.nav_Links} href="#home">Services</Nav.Link>
      <Nav.Link className={styles.nav_Links} href="#link">About Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)
}

export default Navigation;
