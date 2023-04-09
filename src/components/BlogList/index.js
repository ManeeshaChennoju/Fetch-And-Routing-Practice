import {Component} from 'react'

import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

import BlogItem from '../BlogItem'

class BlogList extends Component {
  state = {blogDetailsList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const blogsListData = await response.json()
    const updatedBlogsList = blogsListData.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogDetailsList: updatedBlogsList, isLoading: false})
  }

  render() {
    const {blogDetailsList, isLoading} = this.state
    return (
      <div className="blogListUl_container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="black" width={40} height={40} />
          </div>
        ) : (
          <ul>
            {blogDetailsList.map(eachItem => (
              <BlogItem blogItemDetails={eachItem} key={eachItem.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
