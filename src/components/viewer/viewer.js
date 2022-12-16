
import { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
// import Header from "./header";
// import {  useNavigate } from "react-router-dom";

function Viewer(){

    const[data,setData] = useState([]);
    // const navigate = useNavigate();
//     const userlist =localStorage.getItem("user")
//     console.log(userlist)
//    const obj = JSON.parse(userlist)
//    console.log(obj)
//    var currentid = obj.id;


//    console.log(currentid)


    useEffect(()=>{
        fetch('http://localhost:5000/author')
  .then(response => response.json())
  .then(json => setData(json))
    },[])

    
    // function deleteUser(id){
      

    //     if(id==currentid){
    //         localStorage.clear()
    //         alert("you del yourself ")
    //         delfromDB(id)
    //         // navigate("/Login")

    //     }
    //     else{
    //         delfromDB(id)
    //         // navigate("/home")

    //     }
    // }
    // function delfromDB(id) {
    //     fetch(`http://localhost:5000/users/${id}`, {
    //       method: "DELETE",
    //     }).then((res) => {
    //       if (res.status == 200) {
    //         navigate("/home");
    //       }
    //     });
    //   }

    return(

         <>
         
         <Button>Profile</Button>
         <Button>Logout</Button>
         <Button>Edit Profile</Button>
         <Button>Posts</Button>

         {/* <Header/> */}
          <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Name</th>
           <th>View</th>
           <th>Delete</th>
         </tr>
       </thead>
       <tbody>
         {data.map((element)=>
          <tr key = {element.id}>
          <td>{element.id}</td>
          <td>{element.name}</td>
          <td><Link to={`/userDetail/${element.id}`}>View</Link></td>
          <td><Button variant="danger" >Delete</Button></td>
        </tr>
         )}
        
 
       </tbody>
     </Table>
         </>
    );
}
export default Viewer;






// onClick={()=>{deleteUser(element.id)}}

