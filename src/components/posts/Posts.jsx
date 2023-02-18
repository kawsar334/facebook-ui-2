import { useState } from "react";
import Post from "../post/Post";
import "./post.scss";

const Posts = ({post}) => {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = ()=>{
    setLike(isLiked ? like-1 :like+1)
    setIsLiked(!isLiked)

  }
  return (
    <div className="post">
         <div className="postwrapper">
          <div className="postTop">
            <div className="postLeft">
            <img src={post.photo|| "https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"} alt="" className="postProfileImg" />
            <span className="postusername">kawsar firoz</span>
            <span className="postdate">5 day ago </span>
            </div>
            <div className="postRight">
            <i className="fa-solid fa-ellipsis-vertical"></i>
            </div>
          </div>
          <div className="postcenter">
            <span className="postText">{post.desc} :)</span>
          <img src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Loading..." className="postImg" />
          </div>
          <div className="postBottom">
            <div className="postbottomleft">
            <i className="fa-regular fa-thumbs-up likeicon" onClick={handleLike}></i>
            <i className="fa-regular fa-heart likeicon"></i>
            <span className="likecounter" >{like} people like it.</span>
            </div>
            <div className="postbottomright">
              <div className="postcommenttext">
                9 comments.
              </div>

            </div>
          </div>
         </div>
    </div>
  )
}

export default Posts