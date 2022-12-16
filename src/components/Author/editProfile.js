
import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function EditProfile(){
    const [currentUser,setCurrentUser] =useState({})
    const userString = localStorage.getItem("user")
    const obj = JSON.parse(userString)
  
    const [name , setName] = useState(obj.name)
    const [email ,setEmail] = useState(obj.email)
    const [id ,setID] = useState(obj.id)
    const [password,setPassword] = useState("")
    const [data,setdata] = useState([])
    const navigate = useNavigate();

    function update(e){
        e.preventDefault();
        if(name == "" || email =="" || password ==""){
            alert("kindly fill all the fields")
        }

            else{
            const user={
                name:name,
                email:email,
                password: password
            };
            fetch(`http://localhost:5000/author/${id}`, {
                method: "PUT",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
              }).then((res) => {
                
                  navigate("/Author");
                alert("update  successfully")
                
              });
            
        }
    }
    return(
        <div>
        <Container>
          <Row className="vh-100 d-flex justify-content-center align-items-center">
            <Col md={8} lg={6} xs={12}>
              <div className="border border-3 border-primary"></div>
              <Card className="shadow">
                <Card.Body>
                  <div className="mb-3 mt-md-4">
                    <h2 className="fw-bold mb-2 text-uppercase ">Newbook</h2>
                    <p className=" mb-5">update</p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasictext">
                          <Form.Label className="text-center" >
                            Name
                          </Form.Label>
                          <Form.Control type="text" placeholder="Name" defaultValue={name} onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email
                          </Form.Label>
                          <Form.Control type="email" placeholder="Enter email" defaultValue={email} onChange={(e)=>{setEmail(e.target.value)}} />
                        </Form.Group>
  
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicPassword"
                        >
                          <Form.Label>Password</Form.Label>
                          <Form.Control type="password" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}  />
                        </Form.Group>
                        <Form.Group
                          className="mb-3"
                          controlId="formBasicCheckbox"
                        >
                          {/* <p className="small">
                            <a className="text-primary" href="#!">
                              Forgot password?
                            </a>
                          </p> */}
                        </Form.Group>
                        <div className="d-grid">
                          <Button variant="primary" type="submit" onClick={update}>
                            update
                          </Button>
                        </div>
                      </Form>
  
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
}

export default EditProfile