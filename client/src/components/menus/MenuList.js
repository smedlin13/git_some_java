import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MenuList = ({ menus }) => {
    return(
    <>
    <ListGroup>
        { menus.map( m =>
            <Link to={`/menus/${m.id}`}>
                <ListGroup.Item>{m.name}</ListGroup.Item>
            </Link>)}
    </ListGroup>
    </>
    )
}
export default MenuList;