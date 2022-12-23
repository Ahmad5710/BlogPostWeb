import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link, useNavigate } from "react-router-dom";

function Header2(){
    const navigate = useNavigate();

function AL(){
    navigate("/AuthorLogin")

}
function out(){
    localStorage.removeItem("user")
    navigate("/")
    
}


    return(
        <>
        <Navbar bg="light" expand="lg">
<Container fluid>
  <Navbar.Brand href="#">BlogPost</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="me-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
      <Nav.Link href="#action1">Home</Nav.Link>
      {/* <Nav.Link href="#action2">Link</Nav.Link> */}
      {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action4">
          Another action
        </NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action5">
          Something else here
        </NavDropdown.Item>
      </NavDropdown> */}
      {/* <Nav.Link href="#" disabled>
        Link
      </Nav.Link> */}
    </Nav>

    <Button onClick={out}>Logout</Button>

  </Navbar.Collapse>
</Container>
</Navbar>
        </>
    )
}

export default Header2

