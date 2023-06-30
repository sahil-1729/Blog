import { useState } from "react";
function info (...params){
  console.log(...params)
}
const SaveBlogForm = ({addBlog}) => {
  const [newBlog, setnewBlog] = useState({title : '', author : '', url : ''})
  const createBlog = (value) => {
    info(value.name,` `, value.value)
    setnewBlog((result) => (
      {
        ...result,
        [value.name] : value.value
      }
    ))
    info(`The blog to be saved `,newBlog)
  }

    return (
    <form onSubmit={(event) => addBlog(event,newBlog)}>
    <h2>Create a Blog</h2>
    <label >Title</label> <br/>
    <input type="text" name='title' value={newBlog.title} onChange={({target}) => createBlog(target)} /> <br/>
    <label >Author</label> <br/>
    <input type="text" name='author' value={newBlog.author} onChange={({target}) => createBlog(target)} /> <br/>
    <label >Url</label> <br/>
    <input type="text" name='url' value={newBlog.url} onChange={({target}) => createBlog(target)} /> <br/>
    <input type="submit" value="Submit"/> 
    </form> 
  )
}

  export default SaveBlogForm
