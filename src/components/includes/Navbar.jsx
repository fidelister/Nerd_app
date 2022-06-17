import React from 'react'
import '../css/Navbar.css'
import {Link} from 'react-router-dom'
function Navbar() {
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
  <div className="container-fluid">
    <a className="navbar-brand fw-bold" href="#">NERD<span className='spanColor'>APP</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
        <Link to='/services' className='nav-link'>Services</Link>
        </li>
        <li className="nav-item">
        <Link to='/Pricing' className='nav-link'>Pricing</Link>
        </li>
        <li className="nav-item">
        <Link to='/Business' className='nav-link'>Business</Link>
        </li>
        <li className="nav-item">
        <Link to='/Nerds' className='nav-link'>Nerds</Link>
        </li>
        <li className="nav-item">
        <Link to='/Blog' className='nav-link'>Blogs</Link>
        </li>
        <li className="nav-item">
        <Link to='/Contact' className='nav-link'>Contact</Link>
        </li>
      </ul>
      <form className="d-flex">
        <Link className="btn btn-outline-primary me-3 shadow-sm" to='/signin'>Sign in</Link>
        <Link className="btn btn-primary shadow-sm" to='/signup'>Sign up</Link>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}

export default Navbar