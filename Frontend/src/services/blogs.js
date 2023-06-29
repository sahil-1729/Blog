import axios from 'axios'
const baseUrl = '/api/blogs'
const login = '/api/login'
const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}
const getToken = async (details) => {
  const token = await axios.post(login,details)
  return token
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }