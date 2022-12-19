import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";

function CategoryDetail() {
  const [detail, setDetail] = useState([]);
  // const [post,setpost] = useState([])
  const parms = useParams();

  function Detail() {
    fetch("http://localhost:5000/blogs")
      .then((response) => response.json())
      .then((json) => setDetail(json));
  }
  let filteredData = detail.filter((blog) => {
    if (blog.category == parms.name) {
      return blog.category == parms.name;
    }
  });
  function x() {
    console.log(filteredData);
  }

  useEffect(() => {
    Detail();
    x();
  }, []);

  return (
    <>
      <h1>HY AHMAD</h1>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Blog ID</th>
            <th>Author Name</th>
            <th>BLog Title</th>
            <th>Disable</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((a) => (
            <tr>
              <td>{a.id}</td>
              <td>{a.Authorname}</td>
              <td>{a.title}</td>
              <td>
                <Button>Disable</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default CategoryDetail;
