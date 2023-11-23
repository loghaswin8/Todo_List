import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useEffect, useState } from 'react';
import AddItem from './AddItem';
import SearchItem from './SearchItem';


  


function App() {
  const API_URL = 'http://localhost:3000/items';
   const [items, setItems] = useState( [] );

    const [newItem, setNewItem] = useState('');

    const [search, setSearch] = useState('');

    useEffect(() => {
      const fetchitems = async () => {
        try {
          const response = await fetch(API_URL);
          console.log(response)
          const listItems = await response.json();
          console.log(listItems)
          setItems(listItems);
        } catch (err){
          console.log(err.stack)
        }
      }

      (async () => await fetchitems())()
    }, [])

    const addItem = (item)  => {
      const id = items.length ? items[items.length - 1].id + 1 : 1 ;
      const addNewItem = {id, checked: false, item}
      const listItem = [...items, addNewItem]
      setItems(listItem);
      localStorage.setItem("list_todo", JSON.stringify(listItem))
    }

    const handleCheck = (id) => {
      const listItem = items.map((item) => 
      item.id === id ? {...item, checked: !item.checked} : item)
      setItems(listItem);
      localStorage.setItem("list_todo", JSON.stringify(listItem))
    }

    const handleDelete = (id) => {
      const listItem = items.filter((item) => 
      item.id !== id)
      setItems(listItem);
      localStorage.setItem("list_todo", JSON.stringify(listItem))
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!newItem) return;
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }

  return (
    <div className='App'>
      <Header title="Todo List"/>

      <AddItem 
       newItem = {newItem}
       setNewItem = {setNewItem}
       handleSubmit = {handleSubmit}
      />

      <SearchItem 
        search={search}
        setSearch={setSearch}
      />

      <Content //Using props/prop drilling, App.js is parent and content.js is child. 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck ={handleCheck}
        handleDelete ={handleDelete}
      />

      <Footer //Using props/prop drilling, App.js is parent and footer.js is child. 
        length={items.length}
      />

      
      
    </div>
  );
}

export default App;
