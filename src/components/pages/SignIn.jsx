import React from 'react'
import '../css/SignIn.css'
import Navbar from '../includes/Navbar'
import {BsFacebook, BsApple} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'

function SignIn() {
  return (
    <>
    <Navbar />
    <div className="bg-primary">
  <a href="#" className="m-5 mt-5 text-light">Back</a>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-4">
        <div className="forms bg-white shadow-sm p-3">
          <div>
            <h3>Login</h3>
          </div>
          <div>
            <p>Already have an account? Login below.</p>
          </div>
          <form action className="bg-white">
            <div className="row mt-4">
              <div className="col-sm-2">
                Email
              </div>
              <div className="col-sm-10">
                <input className="form-control form-control-md" type="email" />
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-sm-3">
                Password
              </div>
              <div className="col-sm-9">
                <input type="text" className="form-control form-control-md" />
              </div>   
            </div>
            <input type="checkbox" className="float-left mt-4" /> Remember me?
            <div>
              <button type="button" className="btn btn-primary mt-4 w-100">LOGIN</button>
            </div>
            <div className="text-center mt-4">or use the social account</div>
            <div className="icons d-flex justify-content-center mt-4">
            <a href="#" className="me-5"><BsApple  size={25}/></a>
              <a href="#" className="me-5"><BsFacebook size={25}/></a>
              <a href="#"><FcGoogle size={25}/></a>
            </div>
            <p className="text-center mt-4">I have <a href="#">forgotten my password.</a></p>   
            <p className="text-center">I don't have an account yet. <a href="#">Sign up now.</a></p>   
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

export default SignIn