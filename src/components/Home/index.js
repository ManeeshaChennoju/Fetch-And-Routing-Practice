import './index.css'
import UserInfo from '../UserInfo'
import BlogList from '../BlogList'

const Home = () => (
  <div className="home-container">
    <div className="userInfo_container">
      <UserInfo />
    </div>
    <div className="blogList_container">
      <BlogList />
    </div>
  </div>
)

export default Home
