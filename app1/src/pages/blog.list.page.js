import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Blog from '../components/blog.component'
import { getBlogs } from '../services/blog.service'

const BlogListPage = (props) => {
  const[blogs, setBlogs] =  useState([])

  useEffect(() => {
    loadBlogs()
  }, [])

  const loadBlogs = async() => {
    const result = await getBlogs()
    if (result) {
      console.log(result)
      setBlogs(result)
    }
  }

  const navigate = useNavigate()
  // logout
  const logout = () => {
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('email')

    // redirect to signin
    navigate('/signin')
  }
return (
  <div>
    <button
        onClick={logout}
        style={{ float: 'right' }}
        className="btn btn-warning"
      >
        Logout
    </button>

    <Link to="/blog-create">create new blog</Link>
    <h1 className="header"> Blog List </h1>
    {blogs.map((blog) => {
      const {id, title, content} = blog
      return <Blog id={id} title={title} content={content} />
    })}
  </div>
) 
}

export default BlogListPage
