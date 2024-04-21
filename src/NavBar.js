import { useState, useEffect} from "react";
import React from "react";
import $ from "jquery";
import "./Navbar.css";

const NavBar = () => {
  const [showUserInfo, setUserInfo] = useState(false);
  const toggleUserInfo = () => {
    setUserInfo(!showUserInfo);
    setNotificationDrawer(false);
  };
  
  const [showNotificationDrawer, setNotificationDrawer] = useState(false);

  function bellIconChangeEffect(){
    const notificationBell = document.querySelector("#notification-bell i");
      if (showNotificationDrawer) {
        notificationBell.classList.remove("fa-solid");
        notificationBell.classList.add("fa-regular");

    } else {
    notificationBell.classList.add("fa-solid");
    notificationBell.classList.remove("fa-regular");
    }
  }

  const toggleNotificationDrawer = () => {
    setNotificationDrawer(!showNotificationDrawer);
    bellIconChangeEffect();
    setUserInfo(false);
  };


  const hideToggle = () => {
    if (!showNotificationDrawer) {
      setNotificationDrawer(false);
  
    }
    if (!showUserInfo) {
      setUserInfo(false);
    }
  };
  
  useEffect(() => {
    const handleClick = (event) => {
      const targetNotificationBell = document.querySelector("#notification-bell i");
      const targetUserInfo = document.querySelector(".user-profile img");
      if (event.target!== targetNotificationBell &&
       event.target!== targetUserInfo) {
        hideToggle();

        if(event.target== targetNotificationBell){
          bellIconChangeEffect();
        }
        
      }
    };

    $(document).on("click", handleClick);
    return () => {
      $(document).off("click", handleClick);
    };
  }, [bellIconChangeEffect]);
  

  const userDetails = {
    name: "Grace Jhon",
    phone: "+91 9827839223",
    email: "gracejhon@gmail",
  };

  return (
    <div className="navbar">
      <h2 className="loan-heading">Loans</h2>
      <div className="right-panel">
        <div className="search-bar">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input
            type="text"
            name="searchBar"
            id="search-bar"
            placeholder="Search for something"
          />
        </div>
        <div className="settings">
          <i class="fa-solid fa-gear icons"></i>
        </div>

        {/* -------------------------------------------Notification click event-------------------------------- */}

        <div className="notifications icons" id="notification-bell">
          <i class="fa-regular fa-bell" onClick={toggleNotificationDrawer}></i>
        </div>

        <div className="notification-drawer">
          {showNotificationDrawer && (
            <div className="noticifation-drawer-all-elements">
              <div className="notification-drawer-header">
                <h2>Notifications</h2>
                <div className="cross-icon">
                  <i
                    class="fa-solid fa-xmark"
                    onClick={toggleNotificationDrawer}
                  ></i>
                </div>
              </div>

              <div>
                <ul className="notification-list">
                  <li className="notification-list-item">
                    <div className="notification-drawer-body">
                      <div className="notification">
                        <h3 id="notification-heading">Lorem Ipsum</h3>
                      </div>
                      <div className="notification">
                        <p id="notification-content">Lorem Ipsum</p>
                        <p id="notification-past-days">1d ago</p>
                      </div>
                    </div>
                  </li>

                  <li className="notification-list-item">
                    <div className="notification-drawer-body">
                      <div className="notification">
                        <h3 id="notification-heading">Lorem Ipsum</h3>
                      </div>
                      <div className="notification">
                        <p id="notification-content">Lorem Ipsum</p>
                        <p id="notification-past-days">1d ago</p>
                      </div>
                    </div>
                  </li>

                  <li className="notification-list-item">
                    <div className="notification-drawer-body">
                      <div className="notification">
                        <h3 id="notification-heading">Lorem Ipsum</h3>
                      </div>
                      <div className="notification">
                        <p id="notification-content">Lorem Ipsum</p>
                        <p id="notification-past-days">1d ago</p>
                      </div>
                    </div>
                  </li>

                  <li className="notification-list-item">
                    <div className="notification-drawer-body">
                      <div className="notification">
                        <h3 id="notification-heading">Lorem Ipsum</h3>
                      </div>
                      <div className="notification">
                        <p id="notification-content">Lorem Ipsum</p>
                        <p id="notification-past-days">1d ago</p>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
        {/* ------------------------------------------user profile img click event---------------------------------- */}
        <div className="user-profile">
          <img
            src="profilePic.png"
            alt="profile pic?"
            // onClick={() => showUserInfo}
            onClick={toggleUserInfo}
          />
        </div>

        <div className="profile-info-togle">
          {showUserInfo && (
            <div className="user-details-info">
              <div className="user-personal-data">
                <div className="user-profile-img">
                  <img src="profilePic.png" alt="profile pic" />
                </div>
                <div className="user-basic-details">
                  <div className="left-section">
                    <h4 id="name">{userDetails["name"]}</h4>
                  </div>
                  <div className="right-section">
                    <p id="phone">{userDetails["phone"]}</p>
                    <p id="seprator">|</p>
                    <p id="email">{userDetails["email"]}</p>
                  </div>
                </div>
              </div>

              <div className="togle-list-items">
                <ul>
                  <li className="togle-item">Menu1</li>
                  <li className="togle-item">Menu2</li>
                  <li className="togle-item">Menu3</li>
                  <li className="togle-item">Menu4</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

