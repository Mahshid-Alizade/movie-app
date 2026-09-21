import React from "react";

export default function Navbar() {
  return (
    <div className="nav-container">
      <a className="nav-logo">LOGO</a>
      <nav className="nav-links">
        <a href="#" className="nav-link">
          Films
        </a>
        <a href="#" className="nav-link">
          Series
        </a>
        <a href="#" className="nav-link">
          Movie Buffs
        </a>
        <a href="#" className="nav-link">
          Lists
        </a>
        <a href="#" className="nav-link">
          Artist
        </a>
        <a href="#" className="nav-link">
          Blog
        </a>
        <a href="#" className="nav-link">
          Sections
        </a>
      </nav>
      <div className="nav-actions">
        <button className="nav-action nav-action--notification"></button>
        <button className="nav-action nav-action--subscription">
          Subscribe
        </button>
        <button className="nav-action nav-action--search"></button>
        <button className="nav-action nav-action--login">Log in</button>
      </div>
    </div>
  );
}
