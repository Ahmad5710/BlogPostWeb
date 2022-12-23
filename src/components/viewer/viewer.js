
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
// import {  useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


import { Link, useNavigate } from "react-router-dom";

function Viewer(){

    const[data,setData] = useState([]);
    const navigate = useNavigate();
    const userlist =localStorage.getItem("user")
   const obj = JSON.parse(userlist)
   var currentid = obj.id;
  //  console.log(currentid)





    useEffect(()=>{
        fetch(`http://localhost:5000/author/${currentid }`)
  .then(response => response.json())
  .then(json => setData(json))
    },[currentid])

    
    // function deleteUser(id){
      

    //     if(id==currentid){
    //         localStorage.clear()
    //         alert("you del yourself ")
    //         delfromDB(id)
    //         navigate("/Login")

    //     }
    //     else{
    //         delfromDB(id)
    //         navigate("/home")

    //     }
    // }
    // function delfromDB(id) {
    //     fetch(`http://localhost:5000/author/${id}`, {
    //       method: "DELETE",
    //     }).then((res) => {
    //       if (res.status == 200) {
    //         navigate("/home");
    //       }
    //     });
    //   }


      function logout(){
        localStorage.removeItem("user")
        navigate("/AuthorLogin")
      }
 
      function home(){
        
        navigate("/Home2")
      }
    return(

         <>
           
           <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="">{data.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link href="" onClick={home} >Home</Nav.Link>
            <Nav.Link href="" onClick={logout}>Logout</Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      


         {/* <Header/> */}
          <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Name</th>
           <th>Email</th>
           {/* <th>View</th>
           <th>Delete</th> */}
         </tr>
       </thead>
       <tbody>
         
          <tr key = {data.id}>
          <td>{data.id}</td>
          <td>{data.name}</td>
          <td>{data.email}</td>
          {/* <td><Link to={`/userDetail/${element.id}`}>View</Link></td>
          <td><Button variant="danger" onClick={()=>{deleteUser(element.id)}}>Delete</Button></td> */}
        </tr>
        
        
 
       </tbody>
     </Table>
         </>
    );
}
export default Viewer