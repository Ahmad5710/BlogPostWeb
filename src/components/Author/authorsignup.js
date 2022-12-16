import { useEffect, useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function AuthorSignup(){
    const [name , setName] = useState("")
    const [email ,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [data,setdata] = useState([])
    const [bluetick,SetBluetick]= useState("fa-solid fa-check")
    const navigate = useNavigate();
//     useEffect(()=>{
//         fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => setdata(json))
//     },[])
    function signup(e){
        e.preventDefault();
        if(name == "" || email =="" || password ==""){
            alert("kindly fill all the fields")
        }

            else{
            const author={
                name:name,
                email:email,
                password: password,
                bluetick: bluetick
            };
            fetch("http://localhost:5000/author", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(author),
              }).then((res) => {
                if (res.status === 201) {
                  navigate("/AuthorLogin");
                alert("signup  successfully")
                }
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
                    <p className=" mb-5">Please enter your Details</p>
                    <div className="mb-3">
                      <Form>
                        <Form.Group className="mb-3" controlId="formBasictext">
                          <Form.Label className="text-center" >
                            Name
                          </Form.Label>
                          <Form.Control type="text" placeholder="Name" onChange={(e)=>{setName(e.target.value)}} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label className="text-center">
                            Email
                          </Form.Label>
                          <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{setEmail(e.target.value)}} />
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
                          <Button variant="primary" type="submit" onClick={signup}>
                            Signup
                          </Button>
                        </div>
                      </Form>
                      <div className="mt-3">
                        <p className="mb-0  text-center">
                          Aleady have an account?{" "}
                          <Link to="/AuthorLogin" className="text-primary fw-bold">
                            Login
                          </Link>
                        </p>
                      </div>
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

export default AuthorSignup


// <i class="fa-solid fa-check"></i>