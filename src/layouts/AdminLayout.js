import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import SideBar from "../componets/SideBar";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

export default function AdminLayout() {
  const [isSidebarVisible, setSidebarVisibility] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisibility(!isSidebarVisible);
  };

  return (
    <div
      className={`container-fluid ${
        isSidebarVisible ? "show-sidebar" : "hide-sidebar"
      }`}
    >
      <div
        className="position-absolute bottom-0 m-2"
        style={{ zIndex: 1000 }}
        onClick={toggleSidebar}
      ></div>
      <div className="row">
        {/* Sidebar */}
        <SideBar isVisible={isSidebarVisible} className="fs-3 text-primary" />

        {/* Detail */}
        <div className="col">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
