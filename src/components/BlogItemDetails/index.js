import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    console.log(data)
    const convertedData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic,
    }
    console.log(convertedData)
    this.setState({blogData: convertedData, isLoading: false})
  }

  render() {
    const {blogData, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content, topic} = blogData
    return (
      <div className="blogItem_details_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="black" width={40} height={40} />
          </div>
        ) : (
          <div className="blogItem_details_container" data-testid="loader">
            <h1 className="title">{title}</h1>
            <div className="avatarAndAuthor">
              <img className="avatarImage" src={avatarUrl} alt={topic} />
              <p className="author">{author}</p>
            </div>
            <img className="titleImage" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails
