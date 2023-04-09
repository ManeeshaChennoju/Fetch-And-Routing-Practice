import {Component} from 'react'
import {Link} from 'react-router-dom'
import './index.css'

class BlogItem extends Component {
  render() {
    const {blogItemDetails} = this.props
    const {id, title, imageUrl, avatarUrl, author, topic} = blogItemDetails
    return (
      <Link to={`/blogs/${id}`} className="blog_item_link">
        <li className="blog_item_container">
          <div className="img_container">
            <img src={imageUrl} alt={title} className="images" />
          </div>
          <div className="blog-details-container">
            <p className="topic">{topic}</p>
            <h1 className="title">{title}</h1>
            <div className="avatarAndAuthor">
              <img src={avatarUrl} alt={title} className="avatar_imgs" />
              <p className="author">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
