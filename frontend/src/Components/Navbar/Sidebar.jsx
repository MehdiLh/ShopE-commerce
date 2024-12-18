import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from '../../Context/ShopContext';
import sublinks from "./data";
import './Navbar.css'

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <div
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <aside className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          <FaTimes />
        </button>
        <div className="sidebar-links">
          {sublinks && sublinks.length > 0 ? (
            sublinks.map((item, index) => {
              const { links, page } = item;
              return (
                <article key={index}>
                  <h4>{page}</h4>
                  <div className="sidebar-sublinks">
                    {links && links.length > 0 ? (
                      links.map((link, index) => {
                        const { url, icon, label } = link;
                        return (
                          <a key={index} href={url}>
                            {icon}
                            {label}
                          </a>
                        );
                      })
                    ) : (
                      <p>No links available</p>
                    )}
                  </div>
                </article>
              );
            })
          ) : (
            <p>No sections available</p>
          )}
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
