import { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate } from "react-router-dom";
import Header from './header';
import CategoryDetail from "./categoryDetail";

function Categories(){
    const [cat,setCat]=useState([])
    const navigate = useNavigate();

    function categories(){
        fetch("http://localhost:5000/categorybyadmin")
        .then((response) => response.json())
        .then((json) => setCat(json))
        
    }

    const go=()=>{
        navigate("/CreateCategory")

    }
useEffect(()=>{
    categories()
},[])
    return(
        <>
        <Header/>

        <Navbar>
      <Container>
        <Navbar.Brand href="#home">Categories Detail</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Button onClick={go}>CreateCategory</Button>
          {/* <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>

    <ListGroup className="container d-flex align-items-center justify-content-center" >
        {cat.map((c)=>
              <ListGroup.Item action  key={c.id}>
                <Link to={`/CategoryDetail/${c.name}`}>{c.name}</Link>
            </ListGroup.Item>
      
        )}

    </ListGroup>
 

    
        </>
    )
}

export default Categories