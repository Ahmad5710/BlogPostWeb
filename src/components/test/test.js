// import React,{useState,useEffect} from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import DropdownButton from 'react-bootstrap/DropdownButton';
// import Dropdown from 'react-bootstrap/Dropdown'


// function Test() {
//   const [value,setValue]=useState([]);



//   function categoryData(){
//     fetch('http://localhost:5000/categorybyadmin')
// .then(response => response.json())
// .then(json => setValue(json))
//  }
//   const handleSelect=(e)=>{
//     console.log(e);
//     setValue(e)
//   }
//  useEffect(()=>{
//     categoryData()
//  },[])
//   return (
//     <div className="App container">
      
//       <DropdownButton
//       alignRight
//       title="Dropdown right"
//       id="dropdown-menu-align-right"
//       onSelect={handleSelect}
      
//         >
//           {value.map((data)=>
//           <Dropdown.Item eventKey={data.id}>{data.name}</Dropdown.Item>

//           )}
              
//               <Dropdown.Item eventKey="option-2">option-2</Dropdown.Item>
//               <Dropdown.Item eventKey="option-3">option 3</Dropdown.Item>
//               <Dropdown.Divider />
//               <Dropdown.Item eventKey="some link">some link</Dropdown.Item>
//       </DropdownButton>
//       <h4>You selected {value}</h4>
//     </div>
//   );
// }

// export default Test;