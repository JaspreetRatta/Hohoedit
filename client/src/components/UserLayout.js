// UserLayout.js
import React from "react";
import "../resourses/user.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function UserLayout({ children }) {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = React.useState(false);

  const { user } = useSelector((state) => state.users);

  const userMenu = [

    {
      name: "Home",
      icon: "ri-home-line",
      path: "/",
    },
    {
      name: "Bookings",
      icon: "ri-file-list-line",
      path: "/bookings",
    },
    {
      name: "Profile",
      icon: "ri-user-line",
      path: "/client/src/pages/Profile",
    },
    {
      name: "Contact",
      icon: "ri-chat-smile-2-line",
      path: "/client/src/pages/ContactForm",
    },
    {
      name: "Logout",
      icon: "ri-logout-box-line",
      path: "/logout",
    },
  ];

  let activeRoute = window.location.pathname;
  if (window.location.pathname.includes("book-now")) {
    activeRoute = "/";
  }

  const handleMenuToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="user-layout-parent">
      <div className="user-topnav">
        <div className="user-topnav-header">
          <i
            className={`menu-icon ${collapsed ? "ri-menu-2-fill" : "ri-close-line"}`}
            style={{ color: "white" }}
            onClick={handleMenuToggle}
          ></i>
          <h1 className="user-logo">HoHo</h1>
          <div className="user-role">
            Welcome {user?.name}
          </div>
        </div>
        <div className={`user-menu ${collapsed ? "" : "menu-active"}`}>
          {userMenu.map((item, index) => (
            <div
              className={`${
                activeRoute === item.path && "user-active-menu-item"
              } user-menu-item`}
              key={index}
              onClick={() => {
                if (item.path === "/logout") {
                  localStorage.removeItem("token");
                  navigate("/login");
                } else {
                  navigate(item.path);
                }
              }}
            >
              <i className={item.icon}></i>
              <span>{item.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="user-body">

        <div className="user-content">{children}</div>
      </div>
    </div>
  );
}

export default UserLayout;
