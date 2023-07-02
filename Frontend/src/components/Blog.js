import "../index.css"
import { useRef } from "react"
import Toggle from "./Toggle"
const Blog = ({blog}) => {
  const refff = useRef()

  return (
  <div className="blog">
    {blog.title} <br/> 
    <Toggle buttonLabel1='hide' buttonLabel2='view' refs={refff} >
    {blog.url} <br/> {blog.likes} <button>Like</button> <br/> {blog.author} <br/>
    </Toggle>
  </div>  
)}

export default Blog