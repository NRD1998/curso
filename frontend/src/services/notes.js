import axios from 'axios'
const baseUrl = 'https://3001-idx-curso-1717666185976.cluster-6yqpn75caneccvva7hjo4uejgk.cloudworkstations.dev/api/notes'

const getAll = () => {
    const request = axios.get(baseUrl, {withCredentials: true})
    return request.then(response => response.data)
  }
  
  const create = newObject => {
    const request = axios.post(baseUrl, newObject, {withCredentials: true})
    return request.then(response => response.data)
  }
  
  const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject, {withCredentials: true})
    return request.then(response => response.data)
  }
  
  export default { 
    getAll, create, update 
  }