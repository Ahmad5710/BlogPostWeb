import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import Authors from './AuthorDetail/Authors';
import Viewers from './viewer/viewer';
import { Link, useNavigate } from "react-router-dom";
import Header from './header';




function AdminDashBoard(){

    return(
        
        <>
        <h1>Admin DashBoard</h1>
<div className="container">
  <Header/>
</div>


</>
        
       
    );
}

export default AdminDashBoard




















            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}