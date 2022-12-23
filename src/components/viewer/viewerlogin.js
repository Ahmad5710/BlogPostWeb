import { useState,useEffect } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";




function ViewerLogin() {
const [email ,setEmail] = useState("")
const [password,setPassword] = useState("")
const [data,setdata] =useState([])
const navigate = useNavigate();
useEffect(()=>{
    fetch("http://localhost:5000/viewer")
    .then((response) => response.json())
    .then((json) => setdata(json))
},[])


function login(e){
    e.preventDefault();
    // alert("new click")
    let filteredData= data.find((user) => {
        return (user.email===email && user.password===password)
       
         });
         
         if (filteredData===undefined){ 
            alert("Email or password is incorrect ")
          }
          else{
             
              alert("successfully Logined");
              navigate("/Viewer");          
}
localStorage.setItem("user", JSON.stringify(filteredData))


}
  
  return (
    <div>
      <Container>
        <h1>viewer</h1>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">BlogPost</h2>
                  <p className=" mb-5">Please enter your email and password!</p>
                  <div className="mb-3">
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="text-center">
                          Email address
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
                        <Button variant="primary" type="submit" onClick={login}>
                          Login
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Don't have an account?{" "}
                        <Link to="/ViewerSignup" className="text-primary fw-bold">
                          Sign Up
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
  );

}
export default ViewerLogin