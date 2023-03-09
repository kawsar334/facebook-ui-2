import { useState } from "react";
import "./sidebar.scss";

const Sidebar = () => {
  const [open, setOpen] = useState(true);


  return (
    <>

      <i className="fa-solid fa-bars" onClick={()=>setOpen(!open)}></i>
      {open &&<div className="sidebar">
        <div className="sidebarWrapper">
            <ul className="sidebarList">
              <li className="sidebarListItem">
            <i className="fa-solid fa-square"></i>
            <span className="sidebarItemText">News feed</span>
              </li>
          <li className="sidebarListItem">
            <i className="fa-regular fa-comment"></i>
            <span className="sidebarItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-solid fa-photo-film"></i>
            <span className="sidebarItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-solid fa-user-group"></i>
            <span className="sidebarItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-regular fa-bookmark"></i>
            <span className="sidebarItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-solid fa-clipboard-question"></i>
            <span className="sidebarItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-solid fa-briefcase"></i>
            <span className="sidebarItemText">jobs</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-solid fa-briefcase"></i>
            <span className="sidebarItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <i className="fa-solid fa-book"></i>
            <span className="sidebarItemText">Courses</span>
          </li>
            </ul>
            <button className="sidebarButton"> Show more</button>
            <hr className="sidebarHr"/>
            <ul className="sidebarFriendList">
              <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/14881779/pexels-photo-14881779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="sidebarFriendImg" />
                  <span className="sidebarFriendName">kawsar firoz</span>
              </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/14881779/pexels-photo-14881779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="sidebarFriendImg" />
            <span className="sidebarFriendName">kawsar firoz</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/14881779/pexels-photo-14881779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="sidebarFriendImg" />
            <span className="sidebarFriendName">kawsar firoz</span>
          </li>
          <li className="sidebarFriend">
            <img src="https://images.pexels.com/photos/14881779/pexels-photo-14881779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="..." className="sidebarFriendImg" />
            <span className="sidebarFriendName">kawsar firoz</span>
          </li>
            </ul>
        </div>
      </div>}
    </>
  )
}

export default Sidebar