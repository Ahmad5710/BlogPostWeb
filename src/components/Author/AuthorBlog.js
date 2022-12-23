import { useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Table from 'react-bootstrap/Table';
import { Link, useNavigate } from "react-router-dom";




function AuthorBlog(){

    const [data,setData]=useState([])
    const obj = localStorage.getItem("user")
    const obj1 = JSON.parse(obj)
    const obj2 = obj1.name
    const navigate = useNavigate();
   

    function Ab(){
        fetch("http://localhost:5000/blogs")
        .then((response) => response.json())
        .then((json) => setData(json));
    }
    

    let filteredData = data.filter((blog) => {
        if(blog.Authorname== obj2 ){
            return blog.Authorname== obj2 
        }
        
          
        
      });

      function deleteBlog(id) {
        fetch( `http://localhost:5000/blogs/${id}`, {
          method: "DELETE",
        }).then((res) => {
          if (res.status == 200) {
            navigate("/AuthorBlog");
          }
        });
      }
      function edit(id){
        <Link></Link>
      }
 

    useEffect(()=>{
        Ab()
    },[])

  return(<>


 
   <Table striped bordered hover>
      <thead>
        <tr>
          <th>BlogTitle</th>
          <th>Category</th>
          <th>EditBlog</th>
          <th>Delete Blog</th>
        </tr>
      </thead>
      <tbody>
         {
    filteredData.map((a)=>
    <tr key={a.id}>
    <td>{a.title}</td>
    <td>{a.category}</td>
    <td><Link to={`/EditPost/${a.id}`}>Edit</Link></td>
    <td><Button onClick={()=>{deleteBlog(a.id)}}>Delete</Button></td>

  </tr>

    )
  }
       
       
      </tbody>
    </Table>


  </>
  
  )
}

export default AuthorBlog