import "../index.css"
import { useRef } from "react"
import Toggle from "./Toggle"

const Blog = ({blog,blog_id,addLike,deleteBlog}) => {
  const refff = useRef()

  return (
  <div className="blog">
    <div >
    {blog.title}   
    </div>
    {/* {console.log(blog_id)} */}
    <Toggle buttonLabel1='hide' buttonLabel2='view' refs={refff} > 
    <div className="url" >
    {blog.url} 
    </div>
    <div className="like" >
    {blog.likes} 
    </div>
    <button className="likeButton" onClick={(event) => addLike(event,blog_id,blog)} >Like</button>
    <div className="author" >
    {blog.author}   
    </div>
    <button onClick={(event) => deleteBlog(event,blog_id,blog)} >delete</button>
    </Toggle>
  </div>  
)}

export default Blog