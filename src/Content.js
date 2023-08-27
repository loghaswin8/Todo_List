import React from 'react';
import ListItems from './ListItems';

//getting the props parameter value which drilled from App.js
const Content = ({items, handleDelete, handleCheck}) => { 
      
      return (
        <main>
          {(items.length) ? (
            ////Using props/prop drilling, here Content.js is parent and ListItems.js is child. 
            <ListItems 
              items={items}
              handleCheck ={handleCheck}
              handleDelete ={handleDelete}
            />
           ) : (
            <p>list is empty</p>
           )
        }
      
          
        </main>
      );
    }

export default Content