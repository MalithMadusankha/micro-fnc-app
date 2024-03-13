import React from "react";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { GrTest } from "react-icons/gr";

export default function SideBar({ isVisible }) {
  return (
    <div
      className={`col-auto col-md-2 mn-vh-100 ${
        isVisible ? "d-md-block" : "d-md-none"
      }`}
      style={{ minHeight: "100vh", backgroundColor: "#d3e4fc" }}
    >
      <div className="">
        <img className="w-100 mt-1 d-none d-sm-inline" src={Logo} alt="logo" />

        <div className="flex-wrap mt-2">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <NavLink
                to={`home`}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <FaHome /> <span className="d-none d-sm-inline">Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`test`}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <GrTest /> <span className="d-none d-sm-inline">Test</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
