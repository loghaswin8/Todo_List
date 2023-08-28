import React, { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({newItem, setNewItem, handleSubmit}) => {
  const inputRef = useRef()

  return (
    <form className='addForm' onSubmit={handleSubmit}>
        <label htmlFor="form">Add Item</label>
        <input 
            autoFocus
            ref={inputRef}
            id='addItem'
            type="text" 
            required
            placeholder='Add List'
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
        />
        <button
            aria-label='add item'
            type='submit'
            onClick={() => inputRef.current.focus()}
        >
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem