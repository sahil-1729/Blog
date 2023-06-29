import axios from 'axios'
const baseUrl = '/api/blogs'
let token = null
const setToken = async (key) => {
  token = `Bearer ${key}`
}
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async (toBeSaved) => {
  
  try{
  const config = {
    headers : { Authorization : token }
  }
  const response = await axios.post(baseUrl,toBeSaved,config)
  return response.data
  }catch(error){
    console.log(`Error `,error.response.data)
    const message = error.response.data

    if(message.error === "jwt expired"){
      console.log(`worked`)
      window.localStorage.clear()
      window.location.reload()
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, setToken, create }