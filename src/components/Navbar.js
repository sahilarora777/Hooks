import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header style={{ backgroundColor: "black", padding: "20px" }}>
      <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_260/portal/m/seo/Logos/Swiggy/Swiggy%20logo-2.png" />
      <nav>
        <ul
          style={{ display: "flex", listStyle: "none", margin: 0, padding: 0 }}
        >
          <li style={{ margin: "0 100px" }}>
            <Link to="/home" style={{ color: "white", textDecoration: "none" }}>
              Home
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/about"
              style={{ color: "white", textDecoration: "none" }}
            >
              About
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/contacts"
              style={{ color: "white", textDecoration: "none" }}
            >
              Contacts
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/location"
              style={{ color: "white", textDecoration: "none" }}
            >
              Counter
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link to="/news" style={{ color: "white", textDecoration: "none" }}>
              News
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/count"
              style={{ color: "white", textDecoration: "none" }}
            >
              Count
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/reducer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Reducer
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link to="/test" style={{ color: "black", textDecoration: "none" }}>
              Test
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/searchbar"
              style={{ color: "black", textDecoration: "none" }}
            >
              Search
            </Link>
          </li>
          <li style={{ margin: "0 100px" }}>
            <Link
              to="/Reducer_example"
              style={{ color: "black", textDecoration: "none" }}
            >
              Search
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
<br></br>;

export default NavBar;
