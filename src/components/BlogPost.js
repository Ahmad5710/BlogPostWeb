import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Modal from "react-bootstrap/Modal";
import { useState } from "react";
// import Image from 'react-bootstrap/Image'

const BlogPost = ({ title, img, desc, Authername, category }) => {
  const [model, setModel] = useState(false);
  function MyModel(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="mb-2"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div
            style={{
              backgroundImage: `url(${img})`,
              height: "300px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          {/* <Image
            src={data.img}
            thumbnail
          /> */}
          {/* <Card.Img variant="top" src={data.img}  />    */}
          <p>{desc}</p>
          <div className="d-flex justify-content-between mx-2">
            <cite>Written by : {Authername}</cite>
            <cite>Category : {category}</cite>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{desc.slice(0, 150) + "..."}</Card.Text>
          <Button onClick={() => setModel(true)} variant="primary">
            Read More
          </Button>
        </Card.Body>
        <div className="d-flex justify-content-between mx-2">
          <cite>Written by : {Authername}</cite>
          <cite>Category : {category}</cite>
        </div>
      </Card>

      <MyModel show={model} onHide={() => setModel(false)} />
    </>
  );
};

export default BlogPost;
