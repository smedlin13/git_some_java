import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const BlogContext = React.createContext();
export const BlogConsumer = BlogContext.Consumer;

const BlogProvider = ({ children }) => {
  const [blogs, setBlogs] = useState([])

  const navigate = useNavigate()

  const getAllBlogs = () => {
    axios.get(`/api/blogs`)
      .then( res => setBlogs(res.data))
      .catch( err => console.log(err))
  }

  const addBlog = (blog) => {
    axios.post(`/api/blogs`, { blog } )
      .then( res => setBlogs([...blogs, res.data]))
      .catch( err => console.log(err))
  }

  const updateBlog = (blog, id) => {
    axios.put(`/api/blogs/${id}`, { blog })
      .then( res => {
        const newUpdatedBlogs = blogs.map( b => {
          if (b.id === id) {
            return res.data
          }
          return b
        })
        setBlogs(newUpdatedBlogs)
        navigate(`/blogs/${id}`)
      })
      .catch( err => console.log(err))
  }

  return (
    <BlogContext.Provider value={{
      blogs,
      getAllBlogs: getAllBlogs, 
      addBlog: addBlog, 
      updateBlog: updateBlog, 
    }}>
      { children }
    </BlogContext.Provider>
  )
}

export default BlogProvider;