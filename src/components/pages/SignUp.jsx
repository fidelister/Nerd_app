import React from 'react'
import '../css/SignUp.css'
import Navbar from '../includes/Navbar'
import {BsFacebook, BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

function SignUp() {
  return (
    <>
    <Navbar />
    <div className="bg-primary">
  <a href="#" className="m-5 mt-5 text-light">Back</a>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
        <div className="forms bg-white shadow-sm p-3">
          <div>
            <h3>Sign Up</h3>
          </div>
          <div>
            <p>Create an account to get started.</p>
          </div>
          <form action className="bg-white">
            <div className="row mt-4">
              <div className="col-sm-2 ">
                Name
              </div>
              <div className="col-sm-10 d-flex">
                <input className="form-control form-control-md me-1" type="text" placeholder="First Name" />
                <input className="form-control form-control-md ms-1" type="text" placeholder="Last Name" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-2">
                Email
              </div>
              <div className="col-sm-10">
                <input className="form-control form-control-md" type="email" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-2">
                Mobile
              </div>
              <div className="col-sm-10">
                <input className="form-control form-control-md" type="email" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-2">
                Password
              </div>
              <div className="col-sm-10">
                <input type="text" className="form-control form-control-md" />
              </div>   
            </div>
            <input type="checkbox" className="float-left mt-4" /> I accept the <a href="#"> terms of service</a>
            <div>
              <button type="button" className="btn btn-primary mt-4 w-100">SIGN UP</button>
            </div>
            <div className="text-center mt-4">Or sign up with</div>
            <div className="icons d-flex justify-content-center mt-4">
              <a href="#" className="me-5"><BsApple  size={25}/></a>
              <a href="#" className="me-5"><BsFacebook size={25}/></a>
              <a href="#"><FcGoogle size={25}/></a>
            </div>
            <p className="text-center mt-4">Already have an account? <a href="#">Login</a></p>   
          </form>
        </div>
      </div>
      <div className="col-sm-6">
      </div>
    </div>
  </div>
</div>

</>
  )
}

export default SignUp