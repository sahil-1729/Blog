import { useState, useEffect } from 'react'
import Blog from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'

function info (...params){
  console.log(...params)
}
const App = () => {
  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null)
  const [message, setMessage] = useState('')
  const [newBlog, setnewBlog] = useState({title : '', author : '', url : ''})
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
    const savedLogin = window.localStorage.getItem('savedUser')
    if(savedLogin){
    const savedObj = JSON.parse(savedLogin)
    setUser(savedObj)
    blogService.setToken(savedObj.token)
    }},[])
  const change = (val,type) => {
    
    if(type === 1){
      // console.log(val)
      setUsername(val)
      // console.log(username)
    }
    if(type === 2){
      // console.log(val)
      setPassword(val)
      // console.log(password)
    }
  }

  const result = async (event) => {   
    event.preventDefault()
    try{
      const user = await loginService.getLogin({username : username, password : password})
      setUser(user)
      info(user)
      window.localStorage.setItem('savedUser',JSON.stringify(user))
      setUsername('')
      setPassword('')
    }catch(exception){
      setMessage('Invalid username or password')
      setTimeout(() => {
        setMessage(null)
      },5000)
    }
  }

  const logout = (event) => {
    event.preventDefault()
    window.localStorage.clear()
    window.location.reload()
  } 

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

  const addBlog = async (event) => {
    event.preventDefault()
    // info(`clicked`)
    const result = await blogService.create(newBlog)
    info(result)
    // const updatedBlogs = blogService.getAll()    
    // setBlogs(updatedBlogs)
  }
  const form = () => (
    <form onSubmit={result}>
    <h1>Login</h1>
  <label >Username</label> <br/>
  <input type="text" value={username} name="Enter_your_username" onChange={({target}) => change(target.value,1)} /> <br/>
  <label >Password</label> <br/>
  <input type="password" value={password} name="Enter_your_password" onChange={({target}) => change(target.value,2)} /> <br/>
  <input type="submit" value="Submit"/>
  </form> 
  )
  const saveBlogForm = () => (
    <form onSubmit={(event) => addBlog(event)}>
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
  return (
    <div>
      <br/>
  <h1>
  {message}
  </h1>
  {/* {info(`The username is `,username)} */}
  {/* {info(`The password is `,password)} */}
  {user === null ? form() : <div>
    {saveBlogForm()}
    <h1>Blogs</h1>
    <h2>
    {user.username} just logged in <br/>
    <button onClick={logout}>logout</button>
    </h2>

      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>}
  {/* {info(`The user is `,user)} */}
  
    </div>
  )
}

export default App