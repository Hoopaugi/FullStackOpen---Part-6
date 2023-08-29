import axios from 'axios'

const baseUrl = 'http://localhost:5000/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)

  return response.data
}

const create = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)

  return response.data
}

const update = async (id, anecdote) => {
  const response = await axios.put(`${baseUrl}/${id}`, anecdote)

  return response.data
}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, update }
