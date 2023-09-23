import React from "react";
import { useTranslation } from 'react-i18next'



function Navbar({ collapsed, handleMenuToggle, activeRoute, user, userMenu, navigate, darkMode, toggleDarkMode }) {
  const toggleMenu = () => handleMenuToggle(); // Handle mobile menu toggle
  const { t } = useTranslation();
  return (
    <div className={`user-topnav ${darkMode ? 'dark-mode' : ''}`}>
    <div className="user-topnav-header">
      <i
        className={`menu-icon ${collapsed ? "ri-menu-2-fill" : "ri-close-line"}`}
        style={{ color: darkMode ? "white" : "black" }}
        onClick={toggleMenu}
      ></i>
      <h1 className="user-logo">HoHo</h1>
      <div className="user-role"> {t}
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
  );
}

export default Navbar;
