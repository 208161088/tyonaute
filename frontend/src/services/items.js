import axios from 'axios'
const baseUrl = '/api/items'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
/*
const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject)
  return response.data
}
*/
export default { getAll/*, create*/ }