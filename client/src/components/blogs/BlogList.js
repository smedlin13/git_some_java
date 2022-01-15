import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
    return(
    <>
    <ListGroup>
        { blogs.map( b =>
            <Link to={`/blogs/${b.id}`}>
                <ListGroup.Item>{b.author}</ListGroup.Item>
            </Link>)}
    </ListGroup>
    </>
    )
}
export default BlogList;