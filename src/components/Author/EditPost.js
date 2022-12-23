import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useRef ,useState} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { useParams } from "react-router-dom";

function EditPost(){

   const [data ,setData]=useState([])
   const parms = useParams();
   
   
  

   // console.log(data)

   // const [data,setData]=useState([])
   const [catData ,setcatData] = useState([])
   const [title,setTitle] =useState("")
   const [src,setSrc] =useState("")
	const [content, setContent] = useState("");
   const [category,setCategory]= useState("")
   const userlist =localStorage.getItem("user")
   const obj = JSON.parse(userlist)
   var Authorname = obj.name;
   // console.log(Authorname)



   
   function editData(){
      fetch(`http://localhost:5000/blogs/${parms.id}`)
      .then((response) => response.json())
      .then((json) => setData(json));
   }

   function categoryData(){
      fetch('http://localhost:5000/categorybyadmin')
  .then(response => response.json())
  .then(json => setcatData(json))
   }

   function handleChange(event){
    setCategory(event.target.value)
}



function blogSubmit(e){
  e.preventDefault();
  if(title == "" || content =="" || category ==""){
      alert("kindly fill all the fields")
  }

      else{
      const blogs={
          title:title,
          img:src,
          Description:content,
          category: category,
          Authorname:Authorname
      };
      fetch(`http://localhost:5000/blogs/${parms.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(blogs),
        }).then((res) => {
          if (res.status) {
            // navigate("/");
          alert("update successfully")
          }
        });
      
  }
}

   useEffect(()=>{
      categoryData()
      editData()
    
   },[])


  
   return(
    <>
        <div className='container'>
    <h1>CreateBlog</h1>
    <Form>
      <Form.Group className="mb-3">
        <Form.Label>Blog Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Blog Title"  defaultValue={data.title} onChange={(e)=>setTitle(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>image</Form.Label>
        <Form.Control type="text" placeholder="Enter image source(link) here"  defaultValue={data.img} onChange={(e)=>setSrc(e.target.value)} />
      </Form.Group>
      <br></br>
      <Form.Label>Description</Form.Label>
      <FloatingLabel label="what is in your mind...">
        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{ height: '100px' }}
          defaultValue={data.Description}
          onChange={(e)=>setContent(e.target.value)}
        />
      </FloatingLabel>
<br></br>


<Form.Label>Blog category</Form.Label>
<Form.Select  onChange={handleChange}>
<option disabled>select Category--</option>

{catData.map((a)=>
        
        <option  key={a.id} value={a.name}>{a.name}</option>
        )}
        
      </Form.Select>


      <br></br>

      

      <Button variant="primary" type="submit" onClick={blogSubmit}>
        Update
      </Button>
    </Form>

    </div>
    </>
   )
}

export default EditPost


