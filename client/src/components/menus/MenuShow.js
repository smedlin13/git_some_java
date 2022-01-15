import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Button, Image } from 'react-bootstrap';
import { MenuConsumer } from '../../providers/MenuProvider';
import MenuForm from './MenuForm';

const MenuShow = ({ updateMenu, deleteMenu }) => {
  const params = useParams();
  const [menu, setMenu] = useState({ drinks: '', food: '', price: 0.00, image: ''})
  const [editing, setEdit] = useState(false)

  useEffect( () => {
    axios.get(`/api/menus/${params.menuId}`)
      .then( res => setMenu(res.data))
      .catch( err => console.log(err))
  }, [])

  const { drinks, food, price, image, id } = menu
  return (
    <>
      { editing ? 
        <>
          <MenuForm
            {...menu}
            updateMenu={updateMenu}
            />
          <Button variant="warning" onClick={() => setEdit(false)}>Cancel</Button>
          <br />
        </>
        :
        <>
          <h1>{drinks}</h1>
          <h2>{food}</h2>
          <h3>Price: {price}</h3>
          <Image src={image} roundedCircle />
          <Button
            variant="warning"
            onClick={() => setEdit(true)}
          >
            Edit
          </Button>
          <Button
            variant="danger"
            onClick={() => deleteMenu(id)}
          >
            Delete
          </Button>
        </>
        }
    </>
  )
}

const ConnectedMenuShow = (props) => (
  <MenuConsumer>
    { value => <MenuShow {...props} {...value} />}
  </MenuConsumer>
)

export default ConnectedMenuShow;