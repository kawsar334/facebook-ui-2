import Posts from "../posts/Posts";
import "./feed.scss";
import Share from "./Share";
import { posts } from "../../dummyData"

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />

        {posts.map((post)=>(
          <Posts key={post.id} post={post} />

        ))}
      
      </div>
    </div>
  )
}

export default Feed