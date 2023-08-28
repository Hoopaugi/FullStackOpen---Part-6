import { useDispatch, useSelector } from 'react-redux'

import { vote } from '../reducers/anecdoteReducer'
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

  const sortedAnecdotes = anecdotes.sort((a, b) => { return b.votes - a.votes })

  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteFilter />
      {sortedAnecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(vote(anecdote.id))} />)}
    </>
  )
}

export default Anecdotes
