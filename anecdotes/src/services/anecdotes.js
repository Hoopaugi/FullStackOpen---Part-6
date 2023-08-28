import axios from 'axios'

const baseUrl = 'http://localhost:5000/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll }
