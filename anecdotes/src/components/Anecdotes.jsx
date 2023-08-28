import { useDispatch, useSelector } from 'react-redux'

import { vote } from '../reducers/anecdoteReducer'
import { set, clear } from '../reducers/notificationReducer'
import AnecdoteFilter from './AnecdoteFilter'

const Anecdote = ({ anecdote, handleVote }) => {
  return (
    <>
      <p>{anecdote.content}</p>
      <span>has {anecdote.votes} </span><button onClick={handleVote}>vote</button>
    </>
  )
}

const Anecdotes = () => {
  const dispatch = useDispatch()

  const anecdotes = useSelector(({ filter, anecdotes }) => { 
    if (filter === '') {
      return anecdotes
    }

    return anecdotes.filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase())) 
  })

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => { return b.votes - a.votes })

  const handleVote = (anecdote) => {
    dispatch(vote(anecdote.id))
    dispatch(set(`You voted for "${anecdote.content}"`))
    setTimeout(() => {
      dispatch(clear())
    }, 5000)
  }

  return (
    <>
      <AnecdoteFilter />
      {sortedAnecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => handleVote(anecdote)} />)}
    </>
  )
}

export default Anecdotes
