import { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const MenuForm = ({ addMenu, id, food, drinks, image, price, updateMenu }) => {
  const [menu, setMenu] = useState({ food: '', drinks: '', image: '', price: 0.0 })


useEffect( () => {
  if (id) {
    setMenu({ food, drinks, price, image })
  }
}, [])

const handleSubmit = (e) => {
  e.preventDefault()
  if (id) {
    updateMenu(id, menu)
  } else {
    addMenu(menu)
  }
  setMenu(({ food: '', drinks: '', price: 0.0, image: ''}))
}

return (
  <>
  <Form onSubmit={handleSubmit}>
    <Form.Group className="mb=3" >
      <Form.Label>Drink</Form.Label>
      <Form.Control
      type="text"
      name="drinks"
      value={menu.drinks}
      onChange={(e) => setMenu({...menu, drinks: e.target.value })}
      />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Food Item</Form.Label>
      <Form.Control
      type="text"
      name="food"
      value={menu.food}
      onChange={(e) => setMenu({ ...menu, food: e.target.value })}
        />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Image</Form.Label>
      <Form.Control
      type="text"
      name="image"
      value={menu.image}
      onChange={(e) => setMenu({ ...menu, image: e.target.value })}
        />
    </Form.Group>
    <Form.Group className="mb-3">
      <Form.Label>Price</Form.Label>
      <Form.Control
      type="float"
      name="price"
      value={menu.price}
      onChange={(e) => setMenu({ ...menu, price: e.target.value })}
        />
    </Form.Group>
    <Button variant="primary" type="submit">
          Submit
        </Button>
    </Form>
    <br />
    </>
)
}

export default MenuForm;