import React from 'react'
import '../css/Contact.css'
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
function Contact() {
  return (
    <>
    <Navbar />
<div classname="bg-light">
  <div className="container mt-5">
    <div className="text-center mt-3">
      <h1>Contact Us</h1>
      <h6>Our team is happy to answer your questions.</h6>
    </div>
    <div className="d-flex justify-content-center w-100 mt-3">
      <button className="btn btn-primary btn-lg me-1">BOOK A NERD</button>
      <button className="btn btn-primary btn-lg ms-1">CUSTOMER CEAR</button>
    </div>
  </div>
  <div className="container forms w-75 bg-white shadow-sm p-3 mt-5 my-5">
    <div className="d-flex justify-content-between">
      <div>
        <h1>Get In Touch</h1>
      </div>
      <div>
        <h1>map</h1>
      </div>
    </div>
    <div>Please fill out the form and we will be in touch as soon as possible.</div>
    <form action>
      <div className="row mt-5">
        <div className="col-sm-2 ">
          Name
        </div>
        <div className="col-sm-10 d-flex">
          <input className="form-control form-control-md me-1" type="text" placeholder="First Name" />
          <input className="form-control form-control-md ms-1" type="text" placeholder="Last Name" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-2">
          Email
        </div>
        <div className="col-sm-10">
          <input className="form-control form-control-md" type="email" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-2">
          Mobile
        </div>
        <div className="col-sm-10">
          <input className="form-control form-control-md" type="email" />
        </div>
      </div>
      <div className="row mt-2">
        <div className="col-sm-2">
          Message
        </div>
        <div className="col-sm-10">
          <textarea name id cols={5} rows={5} className="form-control form-control-md" defaultValue={""} />
        </div>
        <div>
          <button type="button" className="btn btns btn-primary mt-5" style={{float: 'right'}}>SEND</button>
        </div>
      </div>
    </form>
  </div>
</div>
<Footer />
    </>
  )
}

export default Contact