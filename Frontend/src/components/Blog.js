import "../index.css"
import { useRef } from "react"
import Toggle from "./Toggle"

const Blog = ({blog,blog_id,addLike}) => {
  const refff = useRef()

  return (
  <div className="blog">
    {blog.title} <br/> 
    {/* {console.log(blog_id)} */}
    <Toggle buttonLabel1='hide' buttonLabel2='view' refs={refff} > 
    {blog.url} <br/> {blog.likes} <button onClick={(event) => addLike(event,blog_id,blog)} >Like</button> <br/> {blog.author} <br/>
    </Toggle>
  </div>  
)}

export default Blog