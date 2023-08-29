import { useDispatch } from 'react-redux'

import { set, clear } from '../reducers/notificationReducer'
import { createAnecdote } from '../reducers/anecdoteReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = async (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(createAnecdote(content))
    dispatch(set(`You created "${content}"`))
    setTimeout(() => {
      dispatch(clear())
    }, 5000)
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