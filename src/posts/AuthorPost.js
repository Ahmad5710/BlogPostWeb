import { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function Posts(){
    const [data,SetData] =useState([])



    function getPost(){
        fetch("http://localhost:5000/blogs")
        .then(response => response.json())
        .then(json => SetData(json))
    }

    useEffect(()=>{
        getPost()
    },[])
    return(
        <>
        <div>

        </div>
        <div className='container'>
        <div className='row'>
            
            {data.map((a)=>
           <div className='col-4 m-5'>
         
         
         <Card style={{ width: '18rem'  }} key={a.id}>
                <Card.Img variant="top" src={a.img} />
                <Card.Body>
                  <Card.Title>{a.title}</Card.Title>
                  <Card.Text>
                    {a.Description}
                  </Card.Text>
        
                 <div className='d-flex justify-content-between'>
                 <Card.Link href="#">Card Link</Card.Link>
                  <Card.Link href="#">like</Card.Link>
                
                 </div>
                </Card.Body>
              </Card>
            
              </div>
                    )}

            </div>
       
        </div>
       
        </>
       
        
    )
}

export default Posts