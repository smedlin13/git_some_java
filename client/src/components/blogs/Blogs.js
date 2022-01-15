import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';
import BlogList from './BlogList';
import { BlogConsumer } from '../../providers/BlogProvider';
import { Button } from 'react-bootstrap';

const Blogs = ({ blogs, getAllBlogs, addBlog }) => {
  const [adding, setAdding] = useState(false)

  useEffect( () => {
    getAllBlogs()
  }, [])



  // const addBlog = (blog) => {
  //   axios.post('/api/blogs', { blog })
  //     .then( res => {
  //       setBlogs([...blogs, res.data])
  //     })
  //     .catch( err => console.log(err))
  // }

  // const deleteBlog = (id) => {
  //   axios.delete(`/api/blogs/${id}`)
  //     .then( res => {
  //       alert(res.data.message)
  //       setBlogs(blogs.filter( p => p.id !== id ))
  //     })
  //     .catch( err => console.log(err))
  // }

  // const updateBlog = (id, blog) => {
  //   axios.put(`/api/blogs/${id}`, { blog })
  //     .then( res => {
  //       const newUpdatedBlog = blog.map( p => {
  //         if (p.id === id) {
  //           return res.data
  //         }
  //         return p
  //       })
  //     })
  //     .catch( err => console.log(err))
  // }

  return (
    <>
      <h1>Blogs Page</h1>
      { adding ?
          <>
            <BlogForm addBlog={addBlog} />
            <Button variant="info" onClick={() => setAdding(false)}>Cancel</Button>
          </>
        :
        <Button variant="info" onClick={() => setAdding(true)}>+</Button>
      }
      <BlogList blogs={blogs} />
    </>
  )
}

const ConnectedBlog = (props) => (
  <BlogConsumer>
    { value => <Blogs {...props} {...value} />}
  </BlogConsumer>
)

export default ConnectedBlog;