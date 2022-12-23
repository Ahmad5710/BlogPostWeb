import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
// import image from "../images/image.jpg";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import BlogPost from "./BlogPost";
// import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useEffect, useState } from "react";
import Header2 from './header2';
function Home2(){

  const [blogData, setBlogData]=useState([])

  function getBlog(){
    fetch("http://localhost:5000/blogs")
    .then((response) => response.json())
    .then((json) => setBlogData(json));
  }

  useEffect(()=>{
    getBlog()
  },[])


    return(
        <>
       

<Header2/>

<Container >
  
<Row className="m-2" >  
{
  blogData.map((blog ,index ) => {
  return  (
    <div key={blog.id}>
      <Col style={{margin:'10px 0'}} >
      <BlogPost title={blog.title} img={blog.img} desc={blog.Description} Authername={blog.Authorname} category={blog.category} />
      </Col>

    </div>

    )
  })
}
</Row>
</Container>
        </>
    )
}
export default Home2