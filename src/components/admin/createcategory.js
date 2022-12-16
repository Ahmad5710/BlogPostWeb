
import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import Header from "./header";

function CreateCategory(){

    const [Name ,setName] =useState("")

    async function create(e){
        e.preventDefault();
        if(Name === ""){
            alert("kindly Add Category")
        }

            else{
            const categorybyadmin={
                name:Name,
            };
           await fetch("http://localhost:5000/categorybyadmin", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(categorybyadmin),
              }).then((res) => {
                if (res.status <= 204) {
                alert("category create successfully")
                }
                else{
                    alert("category ALready Exist")
                }
              });
            
        }
    }

    return(
        <><h1>category</h1><>
        </>
        <Header/>
        <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <div className="border border-3 border-primary"></div>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase ">BlogPost</h2>

                  <div className="mb-3">
                    <Form>
                      <Form.Group
                        className="mb-3"
                        
                      >
                        <Form.Label>category</Form.Label>
                        <Form.Control type="text" placeholder="Enter category" onChange={(e)=>{setName(e.target.value)}}  />
                      </Form.Group>

                      <div className="d-grid">
                        <Button variant="primary" type="submit" onClick={create} >
                          Add
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
        </>
    )
}

export default CreateCategory