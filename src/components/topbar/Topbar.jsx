import "./topbar.scss";
import {Link} from "react-router-dom";


const Topbar = () => {
  return (
    <div  className="topbarContainer">
        <div className="topbarLeft">
            <span className="logo">Facebook</span>
        </div>
        <div className="topbarCenter">
            <input type="text" className="searchInput" placeholder="Search" />
              <i className="fa-solid fa-magnifying-glass searchIcon"></i>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <Link to="/register" className="topbarLink">REGISTER</Link>
                <Link to="/login" className="topbarLink">LOGIN</Link>
                  <Link to="/profile/:id" className="topbarLink">PROFILE</Link>
            </div>
           <div className="topbarIcons">
                <div className="topbarIconItem">
                        <i className="fa-regular fa-user "></i>
                        <span className="topbarIconBadge">1</span>
                </div>
                  <div className="topbarIconItem">
                      <i class="fa-regular fa-message"></i>
                      <span className="topbarIconBadge">1</span>
                  </div>
                  <div className="topbarIconItem">
                      <i class="fa-regular fa-bell"></i>
                      <span className="topbarIconBadge">1</span>
                  </div>
          </div>
              <img src="https://images.pexels.com/photos/14881779/pexels-photo-14881779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="topbarImg" />
            
        </div>
    </div>
  )
};

export default Topbar