import { useDispatch } from 'react-redux'

import { setNotification } from '../reducers/notificationReducer'
import { createAnecdote, setAnecdotes } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(setNotification())

    dispatch(createAnecdote(content))
    dispatch(setAnecdotes(`You created "${content}"`))
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" />
        <button type="submit">add</button>
      </form>
    </>
  )
}

export default NewAnecdote