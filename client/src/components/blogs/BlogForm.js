import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { InputGroup, FormControl, Container } from 'react-bootstrap';

const BlogForm = ({ addBlog, id, updateBlog, title, posts, author }) => {
  const [blog, setBlog] = useState({ title: '', posts: '', author: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (id) {
      updateBlog(id, blog)
    } else {
    addBlog(blog)
    }
    setBlog({ title: '', posts: '', author: '' })
  }

  return (
    <>
    <Container>
      <form onSubmit={handleSubmit}>
      <InputGroup size="sm" className="mb-3">
      <InputGroup.Text id="inputGroup-sizing-sm">Posts</InputGroup.Text>
      <FormControl 
          aria-label="Posts" 
          aria-describedby="inputGroup-sizing-sm"
          name='posts' 
          value={blog.posts}
          onChange={(e) => setBlog({...blog, posts: e.target.value})}
          required
          placeholder="posts"
        />
        </InputGroup>
        
        <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Author</InputGroup.Text>
        <FormControl 
          aria-label="Author" 
          aria-describedby="inputGroup-sizing-sm"
          name='author'
          value={blog.author}
          onChange={(e) => setBlog({...blog, author: e.target.value})}
          required
          /> 
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
        <InputGroup.Text id="inputGroup-sizing-sm">Title</InputGroup.Text>
        <FormControl 
          aria-label="Title" 
          aria-describedby="inputGroup-sizing-sm"
          name='title'
          value={blog.title}
          onChange={(e) => setBlog({...blog, title: e.target.value})}
          required
          /> 
          </InputGroup>
          
        <Button variant="outline-dark">Submit</Button>
      </form>
      </Container>
    </>
  )
}

export default BlogForm;