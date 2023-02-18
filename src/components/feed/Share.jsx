import "./share.scss"

const Share = () => {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                  <img src="https://images.pexels.com/photos/1288182/pexels-photo-1288182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="shareProfilePicture" />
                <input type="text" name="" placeholder="whats in You mind..." />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                          <i className="fa-solid fa-photo-film" style={{color:"tomato"}}></i>
                        <span className="shareOptionText" >photo or video</span>
                    </div>
                      <div className="shareOption">
                          <i class="fa-solid fa-tag" style={{color:"blue"}}></i>
                          <span className="shareOptionText" >Tag</span>
                      </div>
                      <div className="shareOption">
                          <i class="fa-solid fa-location-pin" style={{color:"green"}}></i>
                          <span className="shareOptionText">Location</span>
                      </div>
                      <div className="shareOption">
                          <i class="fa-regular fa-face-smile" style={{color:"yellow"}}></i>
                          <span className="shareOptionText">Feelings</span>
                      </div>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
    </div>
  )
}

export default Share