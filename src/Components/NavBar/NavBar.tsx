import { NavData } from '../../data/NavData';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/logo.png';
import './NavBar.css';

const NavBar = () => {
  return (
    <>
      <Navbar bg="light" variant="dark" expand="lg" collapseOnSelect className="navbar-fixed-top">
        <Container>
          <Navbar.Brand>
            <Link to="/">
              <img
                src={logo}
                alt="logo"
                style={{ maxHeight: '100px', marginTop: '-10px' }}
                className="hidden-xs"
              />
            </Link>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              {NavData.map((item, i) => (
                <Link to={item.link} key={i} className="nav-menu-links">
                  {item.title}
                </Link>
              ))}
              <br />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
