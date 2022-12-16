
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// import Header from "./header";
import {  useNavigate } from "react-router-dom";

function Author(){

    const[data,setData] = useState([]);
    const navigate = useNavigate();
    const userlist =localStorage.getItem("user")
    console.log(userlist)
   const obj = JSON.parse(userlist)
   console.log(obj)
   var currentid = obj.id;


   console.log(currentid)


    useEffect(()=>{
        fetch(`http://localhost:5000/author/${currentid }`)
  .then(response => response.json())
  .then(json => setData(json))
    },[])

    
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

      function CreateBlog(){
        navigate("/CreateBlog")
      }
      function editprofile(){
        navigate("/EditProfile")
      }
      function logout(){
        localStorage.removeItem("user")
        navigate("/AuthorLogin")
      }
    return(

         <>
         <h1>{data.name}</h1>
         <Button>Profile</Button>
         <Button onClick={logout}>Logout</Button>
         <Button onClick={editprofile}>Edit Profile</Button>
         <Button>Blogs</Button>
         <Button onClick={CreateBlog}>CreateBlog</Button>

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
export default Author;

