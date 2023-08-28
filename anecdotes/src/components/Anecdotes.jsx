import { useDispatch, useSelector } from 'react-redux'

import { vote } from '../reducers/anecdoteReducer'

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

  const anecdotes = useSelector(state => state)
  const sortedAnecdotes = anecdotes.sort((a, b) => { return b.votes - a.votes })

  return (
    <>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote => <Anecdote key={anecdote.id} anecdote={anecdote} handleVote={() => dispatch(vote(anecdote.id))} />)}
    </>
  )
}

export default Anecdotes
