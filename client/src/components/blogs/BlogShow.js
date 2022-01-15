import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogForm from './BlogForm';

const BlogShow = ({}) => {
  const [blog, setBlog] = useState({title: '', author: '', posts: ''})
  let params = useParams()

  useEffect( () => {
    axios.get(`/api/blogs/${params.blogId}`)
      .then( res => {
        setBlog(res.data)
      }) 
      .catch( err => console.log(err))
  }, [])

  return (
    <>
      <h1>{blog.posts}</h1>
      <p>{blog.author}</p>
      <p>{blog.title}</p>
      <p>{params.blogId}</p>
    </>
  )
} 

export default BlogShow;