import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ElectionStatusNavbar from "../ElectionStatusNavbar"
import "./Navbar.css";
import { BiHomeAlt } from 'react-icons/bi';

export default function NavbarAdmin(props) {
  console.log("navbarAdmin:",props.endDate);
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="header">
        <NavLink to="/">
        <i className="icon">
          <BiHomeAlt />
        </i>  Admin
        </NavLink>
      </div>
      <ul
        className="navbar-links"
        style={{ transform: open ? "translateX(0px)" : "" }}
      >
        <li>
          <NavLink to="/Verification" activeClassName="nav-active">
            Verification
          </NavLink>
        </li>
        <li>
          <NavLink to="/AddCandidate" activeClassName="nav-active">
            Add Candidate
          </NavLink>
        </li>
        <li>
          <NavLink to="/Registration" activeClassName="nav-active">
            <i className="far fa-registered" /> Registration
          </NavLink>
        </li>
        <li>
          <NavLink to="/Voting" activeClassName="nav-active">
            <i className="fas fa-vote-yea" /> Voting
          </NavLink>
        </li>
        <li>
          <NavLink to="/Results" activeClassName="nav-active">
            <i className="fas fa-poll-h" /> Results
          </NavLink>
        </li>
        <ElectionStatusNavbar
        elStarted={props.elStarted}
        elEnded={props.elEnded}
        startDate={props.startDate}
        endDate={props.endDate}
      />
      </ul>
      <i onClick={() => setOpen(!open)} className="fas fa-bars burger-menu"></i>
    </nav>
  );
}
