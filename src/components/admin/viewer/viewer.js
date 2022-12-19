import Table from 'react-bootstrap/Table';
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Header from '../header';

function Viewers(){
    const [authorDetail , setAuthorDetail] = useState([])

    function details(){
        fetch('http://localhost:5000/viewer')
  .then(response => response.json())
  .then(json => setAuthorDetail(json))
    }

    useEffect(()=>{
        details()
    },[])

    return(
        <>
        <Header/>
        <Table striped bordered hover className='container'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
      
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {authorDetail.map((item)=>
                <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
        
                <td><Button>Disable</Button></td>
              </tr>
        )
        
        }

       
      </tbody>
    </Table>
        </>
    );
}
export default Viewers