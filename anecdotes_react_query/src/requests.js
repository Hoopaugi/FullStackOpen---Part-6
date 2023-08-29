import axios from 'axios'

const baseUrl = 'http://localhost:5000'

export const getAnecdotes = () => axios.get(`${baseUrl}/anecdotes`).then(res => res.data)

export const createAnecdote = newAnecdote => axios.post(`${baseUrl}/anecdotes`, newAnecdote).then(res => res.data)

export const updateAnecdote = updatedAnecdote => axios.put(`${baseUrl}/anecdotes/${updatedAnecdote.id}`, updatedAnecdote).then(res => res.data)
