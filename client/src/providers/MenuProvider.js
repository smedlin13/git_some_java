import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const MenuContext = React.createContext();
export const MenuConsumer = MenuContext.Consumer;

const MenuProvider = ({ children }) => {
  const [menus, setMenus] = useState([])

  const navigate = useNavigate()

  const getAllMenus = () => {
    axios.get('/api/menus')
      .then( res => setMenus(res.data) )
      .catch( err => console.log(err) )
  }

  const addMenu = (menu) => {
    axios.post('/api/menus', { menu })
      .then( res => setMenus([...menus, res.data]))
      .catch( err => console.log(err) )
  }

  const updateMenu = (id, menu) => {
    axios.put(`/api/menus/${id}`, { menu })
      .then( res => {
        const newUpdatedMenus = menus.map( m => {
          if (m.id === id) {
            return res.data
          }
          return m
        })
        setMenus(newUpdatedMenus)
        navigate('/menus')
      })
      .catch( err => console.log(err) )
  }

  const deleteMenu = (id) => {
    axios.delete(`/api/menus/${id}`)
      .then( res => {
        setMenus(menus.filter( m => m.id !== id))
        alert(res.data.message)
        navigate('/menus')
      })
      .catch( err => console.log(err) )
  }
 
  return (
    <MenuContext.Provider value={{
      menus,
      getAllMenus: getAllMenus,
      addMenu: addMenu, 
      updateMenu: updateMenu, 
      deleteMenu: deleteMenu,
    }}>
      { children }
    </MenuContext.Provider>
  )
}

export default MenuProvider;