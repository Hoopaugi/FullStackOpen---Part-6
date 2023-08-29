import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Anecdotes from './components/Anecdotes'
import NewAnecdote from './components/NewAnecdote'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeAnecdotes())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      <h1>Anecdotes</h1>
      <Notification />
      <Anecdotes />
      <NewAnecdote />
    </div>
  )
}

export default App
