import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    create(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      return state.map(anecdote =>
        anecdote.id === action.payload.id ? action.payload : anecdote
      )     
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { create, vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const voteForAnecdote = (anecdote) => {
  return async dispatch => {
    const updatedAnecdote = { ...anecdote, votes: anecdote.votes + 1 }

    await anecdoteService.update(anecdote.id, updatedAnecdote)

    dispatch(vote(updatedAnecdote))
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()

    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.create(content)

    dispatch(appendAnecdote(newAnecdote))
  }
}

export default anecdoteSlice.reducer