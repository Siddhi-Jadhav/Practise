const Blog = (props) => {
  const { id, title, content, tags } = props

  return <div className="card" style={{width: '18rem', display:'inline-block', margin:'20px'}}>
    <div className="card-body">
    <h5 className = "card-title"> {title}</h5>
    <p className="card-text">{content}</p>
    <p className="card-text">{tags}</p>
    </div>
  </div>
}

export default Blog
