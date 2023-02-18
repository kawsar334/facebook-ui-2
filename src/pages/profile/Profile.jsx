import "./profile.scss";
import Feed from "../../components/feed/Feed"
import RightBar from "../../components/rightbar/RightBar"
import Sidebar from "../../components/sidebar/Sidebar"
import Topbar from "../../components/topbar/Topbar"

const Profile = () => {
  return (
    <>
    <Topbar />
    <div className="profile">
      <Sidebar />
      <div className="profileRight">
        <div className="profileRightTop">
            <img src="https://images.pexels.com/photos/5947119/pexels-photo-5947119.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="coverpic" />
        </div>
        <div className="profileRightBottom">
          <div className="profileItem">

            <img src="https://images.pexels.com/photos/5947111/pexels-photo-5947111.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="profileImage" />
            <span className="profilename">Kawsar firoz</span>
            <span className="welcomeMessage"> Hello my friedn!</span>
          </div>

        </div>
      <Feed />
      <RightBar />
      </div>
<div className="userInformation">
          <h1>User information </h1> 
          <p className="userInfoItem"><b>city:</b> Taif</p>
          <p className="userInfoItem"><b>Relationship:</b> Single</p>
          <p className="userInfoItem"><b>from:</b> Taif</p>
          <div className="userFriends">
            <h1>User friends</h1>
            <div className="userFriend">
              <img src="https://images.pexels.com/photos/6248846/pexels-photo-6248846.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span className="username">kawsar firoz</span>
            </div>
            <div className="userFriend">
              <img src="https://images.pexels.com/photos/6248846/pexels-photo-6248846.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span className="username">kawsar firoz</span>
            </div>
            <div className="userFriend">
              <img src="https://images.pexels.com/photos/6248846/pexels-photo-6248846.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span className="username">kawsar firoz</span>
            </div>
            <div className="userFriend">
              <img src="https://images.pexels.com/photos/6248846/pexels-photo-6248846.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span className="username">kawsar firoz</span>
            </div>
            <div className="userFriend">
              <img src="https://images.pexels.com/photos/6248846/pexels-photo-6248846.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" />
              <span className="username">kawsar firoz</span>
            </div>

          </div>
</div>
    </div>
    </>
  )
}

export default Profile