import { useEffect, useState } from "react"

function Home(){
    const [blog,setBlog] =useState([])
    // const [blog2,setBlog2] = useState([])
    const regex = /(<([^>]+)>)/ig;

    function blogfetch(){
        fetch('http://localhost:5000/blogs')
        .then(response => response.json())
        .then(json => setBlog(json))
    }

    useEffect(()=>{
        blogfetch()
    },[])

    return(
        <>
        {blog.map((a)=>
        <div key={a.id}>
        <h1>{a.title}</h1>
        <div>{a.body.replace(regex, '')} </div>
        <h1>{a.category}</h1>
        </div>


        )}
        </>
    )
}
export default Home