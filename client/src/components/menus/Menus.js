import { useEffect, useState } from 'react';
import { MenuConsumer } from '../../providers/MenuProvider';
import MenuList from './MenuList';
import { Button } from 'react-bootstrap';
import MenuForm from './MenuForm';

const Menus = ({ menus, getAllMenus, addMenu }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllMenus()
  }, [])

  return (
    <>
      <h1>Menu</h1>
      { adding ?
          <>
            <MenuForm addMenu={addMenu} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <MenuList menus={menus} />
    </>
  )
}

const ConnectedMenu = (props) => (
  <MenuConsumer>
    { value => <Menus {...props} {...value} />}
  </MenuConsumer>
)

export default ConnectedMenu;