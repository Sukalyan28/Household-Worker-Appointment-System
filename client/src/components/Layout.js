import React from "react";
import "../styles/LayoutStyles.css";
import { adminMenu } from "./../Data/Data";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Badge, message } from "antd";
//
const Layout = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const location = useLocation();
  const navigate = useNavigate();
  // logout funtion
  const handleLogout = () => {
    localStorage.clear();
    message.success("Logout Successfully");
    navigate("/login");
  };

  //===========doc menu=============
  const workerMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa fa-thin fa-house",
    },
    {
      name: "Appointments",
      path: "/worker-appointments",
      icon: "fa fa-thin fa-list",
    },

    {
      name: "Profile",
      path: `/worker/profile/${user?._id}`,
      icon: "fa fa-thin fa-user",
    },
    
    //   {
    //     name: "Logout",
    //     path: "/logout",
    //     icon: "fa fa-thin fa-right-from-bracket",
    //   },
  ];

  const userMenu = [
    {
      name: "Home",
      path: "/",
      icon: "fa fa-thin fa-house"
    },
    {
      name: "Appointments",
      path: "/appointments",
      icon: "fa fa-thin fa-list"
    },
    {
      name: "Apply Worker",
      path: "/apply-worker",
      icon: "fa fa-thin fa-user"
    },
    {
      name: "Profile",
      path: `/user/profile/${user?._id}`,
      icon: "fa fa-thin fa-user"
    }
    //   {
    //     name: "Logout",
    //     path: "/logout",
    //     icon: "fa fa-thin fa-right-from-bracket",
    //   },
  ];

  // redering menu list
  const SidebarMenu = user?.isAdmin
    ? adminMenu
    : user?.isWorker
    ? workerMenu
    : userMenu;
  return (
    <>
      <div className="main">
        <div className="layout">
          <div className="sidebar">
            <div className="logo">
              <h6>Serv2Ease</h6>
              <hr />
            </div>
            <div className="menu">
              {SidebarMenu.map((menu) => {
                const isActive = location.pathname === menu.path;
                return (
                  <>
                    <div className={`menu-item ${isActive && "active"}`}>
                      <i className={menu.icon}></i>
                      <Link to={menu.path}>{menu.name}</Link>
                    </div>
                  </>
                );
              })}
              <div className={`menu-item `} onClick={handleLogout}>
                <i className="fa-solid fa-right-from-bracket"></i>
                <Link to="/login">Logout</Link>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="header">
              <div className="header-content" style={{ cursor: "pointer" }}>
                <Badge
                  count={user && user.notification.length}
                  className=" mybadge"
                  onClick={() => {
                    navigate("/notification");
                  }}
                >
                  <i class="fa-solid fa-bell"></i>
                </Badge>
                {
                  user?.isWorker && <Link to={`/worker/profile/${user?._id}`}>{user?.name}</Link>
                }
                {
                  !(user?.isWorker) && <Link to={`/user/profile/${user?._id}`}>{user?.name}</Link>
                }
              </div>
            </div>
            <div className="body">{children}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
