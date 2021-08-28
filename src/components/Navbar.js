import React from 'react'

export default function Navbar() {

  function scrollToTop() {
    window.scrollTo(0, 0)
  }
  return (
    <nav className="navbar fixed-top navbar-expand-sm navbar-dark" id="navbar">
      <div className="container-fluid">
        <a className="navbar-brand" onClick={scrollToTop}>ARIASLABS</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-sm-0">
            <li className="nav-item">
              <a className="nav-link" href="#about">About</a>
            </li>
            <li className="nav-item">   
              <a className="nav-link" href="#projects">Projects</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}