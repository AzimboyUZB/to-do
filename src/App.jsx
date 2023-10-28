import { useState } from 'react'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Switch } from 'antd';
import IconMoon from './assets/icons/IconMoon';
import IconSun from './assets/icons/IconSun';

function App() {
  const [newItem, setNewItem] = useState("")
  const [items, setItems] = useState([])
  const [them, setThem] = useState(true)


  function addItem() {
    if (!newItem) {
      alert("Enter an item")
      return;
    }
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem
    }

    setItems(oldList => [...oldList, item])
    setNewItem("")
  }

  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id)
    setItems(newArray)
  }

  function editItem(id, value) {
    const editArray = items.filter(item => item.id && (item => item.value))
    setNewItem(editArray)
    console.log(editArray);
  }
  return (
    <div className={them ? 'wrapper' : 'wrapper them'}>
      <div className={them ? "container" : "container them"}>
        <div className="box__name">
          <h1 className={them ? "name" : "name them"}>To-Do List</h1>
          {them ? (
            <button className="switch" onClick={() => setThem(false)}>
              <IconSun />
            </button>
          ) : (
            <button className="switch them" onClick={() => setThem(true)}>
              <IconMoon />
            </button>
          )}
        </div>
        <div className="box__input">
          <input
            type="text"
            placeholder='Add Item...'
            value={newItem}
            onChange={e => setNewItem(e.target.value)}
          />
          <button className="submit" onClick={() => addItem()}>Add</button>
        </div>
        <ul>
          {items.map((item => (
            <li key={item.id} className={them ? "li" : "li them"}>
              <div className='box__title'>
                <input type='checkbox' className='checkbox'/>
                {item.value}
              </div>
              <div className='box__btn'>
                <button className="delete" onClick={() => deleteItem(item.id)}><DeleteOutlined /></button>
                <button className="edit" onClick={() => editItem(item.id || item.value)}><EditOutlined /></button>
              </div>
            </li>
          )))}
        </ul>
      </div>
    </div>
  )
}

export default App
