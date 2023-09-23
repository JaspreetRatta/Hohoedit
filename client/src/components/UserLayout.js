import React, { useState } from "react";
import "../resourses/user.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import userMenu from "./MenuItems";


function UserLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);

  const activeRoute = window.location.pathname.includes("book-now") ? "/" : window.location.pathname;

  const { user } = useSelector((state) => state.users);

  const navigate = useNavigate();
 
  const handleMenuToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="user-layout-parent">
      <Navbar
        collapsed={collapsed}
        handleMenuToggle={handleMenuToggle}
        activeRoute={activeRoute}
        user={user}
        userMenu={userMenu}
        navigate={navigate}
        
      />
      <div className="user-body">
        <div className="user-content">{children}</div>
      </div>
    </div>
  );
}

export default UserLayout;

