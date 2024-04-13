import React from "react";
import Logo from "../assets/img/logo.png";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
// import { GrTest } from "react-icons/gr";
import { FaCreditCard } from "react-icons/fa";
import { BsFillCollectionFill } from "react-icons/bs";
import { FaShop } from "react-icons/fa6";
import { MdDashboard } from "react-icons/md";

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
                to={``}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <MdDashboard />{" "}
                <span className="d-none d-sm-inline">Dashboard</span>
              </NavLink>
            </li>
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
                to={`lend`}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <FaCreditCard />{" "}
                <span className="d-none d-sm-inline">Lend</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`collection`}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <BsFillCollectionFill />{" "}
                <span className="d-none d-sm-inline">Collection</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={`other-income`}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <FaShop />{" "}
                <span className="d-none d-sm-inline">Other Income</span>
              </NavLink>
            </li>
            {/* <li className="nav-item">
              <NavLink
                to={`test`}
                className="nav-link text-decoration-none align-items-center"
                activeClassName="active"
              >
                <GrTest /> <span className="d-none d-sm-inline">Test</span>
              </NavLink>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
