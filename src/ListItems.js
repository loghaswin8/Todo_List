import React from 'react'
import LineItems from './LineItems';

//getting the drilled parameter from Content.js
const ListItems = ({items, handleDelete, handleCheck}) => {
  return (
    <ul>
        {items.map((item) => (
          //using props/ prop drilling, here ListItems.js is parent and LineItems.js is child.
            <LineItems 
                item={item} 
                key={item.id} //key id is important, without this line of code console will show error.
                handleCheck ={handleCheck}
                handleDelete ={handleDelete}
            />
        ))}
    </ul>
  )
}

export default ListItems