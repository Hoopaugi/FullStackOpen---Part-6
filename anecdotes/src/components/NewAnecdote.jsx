import { useDispatch } from 'react-redux'

import { create } from '../reducers/anecdoteReducer'
import { set, clear } from '../reducers/notificationReducer'

const NewAnecdote = () => {
  const dispatch = useDispatch()

  const addAnecdote = (event) => {
    event.preventDefault()

    const content = event.target.anecdote.value
    event.target.anecdote.value = ''

    dispatch(create(content))
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