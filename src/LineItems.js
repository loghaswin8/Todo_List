import React from 'react'
import { FaTrash } from 'react-icons/fa';

//getting the drilled parameter from ListItems.js
const LineItems = ({item, handleCheck, handleDelete}) => {
  return (
    <li className='item'>

        <input 
            type="checkbox" 
            onChange={() => handleCheck(item.id)}
            checked = {item.checked}
        />

        <label
            onDoubleClick={() => handleCheck(item.id)}
            style= {(item.checked) ? {textDecoration: 'line-through'} : null}
        >
            {item.item}
        </label>

        <FaTrash 
            onClick={() => handleDelete(item.id)}
        />
    </li>
  )
}

export default LineItems