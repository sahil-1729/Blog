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
  useEffect(() => {
    blogService.getAll().then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

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
      const user = await loginService.getToken({username : username, password : password})
      setUser(user)
      info(user)
    }catch(exception){
      setMessage('Invalid username or password')
      setTimeout(() => {
        setMessage(null)
      },5000)
    }
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
  return (
    <div>
      <br/>
  <h1>
  {message}
  </h1>
  {info(`The username is `,username)}
  {info(`The password is `,password)}
  {user === null ? form() : <div>
    <h2>blogs</h2>
      {blogs.map(blog =>
        <Blog key={blog.id} blog={blog} />
      )}
    </div>}
  {info(`The user is `,user)}
      
    </div>
  )
}

export default App