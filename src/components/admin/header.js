import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Authors from './AuthorDetail/Authors';
import Viewers from './viewer/viewer';
import { Link, useNavigate } from "react-router-dom";


function Header(){
    
    const navigate = useNavigate();

    function create(){
        navigate("/categories");  
    }
    function author(){
      navigate("/Authors");  
  }
  function viewer(){
    navigate("/Viewers");  
}
function blog(){
  navigate("/CreateCategory");  
}
function logout(){
  localStorage.removeItem("user")
  navigate("/AdminLogin")
}
return(
    <>
           <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="" onClick={author}>Authors</Nav.Link>
            <Nav.Link href="" onClick={viewer}>viewers</Nav.Link>
            <Nav.Link href="" onClick={create}>Categories</Nav.Link>
            <Nav.Link href="" onClick={logout}>logout</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar></>
);
}

export default Header