import { useDispatch, useSelector } from 'react-redux'

import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'
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
    dispatch(voteForAnecdote(anecdote))
    dispatch(setNotification(`You voted for "${anecdote.content}"`))
  }

  return (
    <>
      <AnecdoteFilter />
      {sortedAnecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => handleVote(anecdote)} />)}
    </>
  )
}

export default Anecdotes
