import React from 'react'
import '../css/Blog.css'
import Navbar from '../includes/Navbar'
import Footer from '../includes/Footer'
function Blog() {
  // "typewriter-effect": "^2.18.2",

  return (
    <>
    <Navbar />
  <div classname="bg-light">
  <div className="container radius bg-white shadow-lg my-5">
    <div className="row radius shadow-sm p-4 mt-5">
      <div className="col-sm-4 radius bg-dark">
      </div>
      <div className="col-sm-7 ms-3">
        <h1>Why should I choose an online Tech Support app?</h1>
        <p>
          Caitlin McGregor
          <span className="text-primary"> - Uploaded on May 11, 2022</span>
        </p>
        <h6>
          Online tech support apps like NerdApp are here to stay. They
          represent a future-focused approach that allows people to access
          their tech support in the same way they order a pizza, buy the
          latest fashion or hail a ride.
        </h6>
        <button className="btn btn-primary text-light">CONTINUE READING</button>
      </div>
    </div>
  </div>
</div>
<Footer />
    </>
  )
}

export default Blog