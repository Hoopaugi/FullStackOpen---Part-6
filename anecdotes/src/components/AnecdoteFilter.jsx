import { useDispatch } from 'react-redux'

import { change } from '../reducers/filterReducer'

const AnecdoteFilter = (props) => {
  const dispatch = useDispatch()

  const changeFilter = (event) => {
    const filter = event.target.value

    dispatch(change(filter))
  }

  return (
    <>  
      <input 
        placeholder="filter"
        type="text" 
        name="filter" 
        onChange={changeFilter}
      />
    </>
  )
}

export default AnecdoteFilter