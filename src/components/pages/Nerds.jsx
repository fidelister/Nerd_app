import React from 'react'
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
import '../css/Nerds.css'
function Nerds() {
  return (
    <>
    <Navbar />
    <div className="bg-light">
  <div className="container m-25 pt-5">
    <div className="row">
      <div className="col-sm-6">
        <h2>Become a NerdApp Freelancer</h2>
        <ul>
          <li>Sign up as a freelance Nerdli&gt;</li>
          <li>Look out for job requests</li>
          <li>Anywhere, anytime</li>
          <li>Remote or on-site, your choice</li>
          <li>Anywhere, anytime</li>
          <li>No admin hassle</li>
          <li>Hourly rate: ₦15496 - Call out fee: ₦6887</li>
        </ul>
        <button className="btn btns btn-primary btn-lg shadow-lg p-3" type="submit">
          SIGNUP AS A NERD
        </button>
      </div>
      <div className="col-sm-6 bg-dark" />
    </div>
  </div>
  <div className="container mt-5">
    <div className="row">
      <div className="col-sm-6 bg-dark" />
      <div className="col-sm-6">
        <h2>We connect you to customers</h2>
        <h6>
          Share your profile link so that your contacts can book you
          directly.
        </h6>
        <p className="mt-2">
          Once you accept the job, you can chat to the user in the job card
          page and connect to their device remotely using software of your
          choice. <br /><br />
          Complete the job successfully, rate the customer and they will
          rate you. <br /><br />Payments, invoicing, notifications, job
          processes and onboarding are all simple and automated.
          <br /><br />You will be paid directly into your local bank account
          which you will connect during the easy onboarding process.
        </p>
      </div>
    </div>
  </div>
  <div className="container container-sm-6 Partnership shadow-sm mt-5">
    <h4>Partnership</h4>
    <h2 className="mt-2">Why CompTIA?</h2>
    <ol>
      <li className="mb-3">
        Certification Discounts—We get great discounts on vendor-neutral
        CompTIA IT certifications for our Nerds like CompTIA A+, CompTIA
        Network+, CompTIA Security+ and more!
      </li>
      <li>
        Our Technicians can also leverage off of the CompTIA network by
        gaining access to exclusive industry events and training.
      </li>
    </ol>
    <button className="btn btn-lg bg-light" type="submit">
      <h6>CATALOGUE</h6>
    </button>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4 shadow-sm p-3">
        <h2>Get Involved</h2>
        <h6>
          Join a CompTIA community or technology interest group and
          collaborate on technology and business-building initiatives,
          network with peers, open doors to new partnerships and contribute
          ideas to shape the future of our industry.
        </h6>
      </div>
      <div className="col-sm-4 shadow-sm p-3">
        <h2>Expand Your Network</h2>
        <h6>
          Participate in tech-focused forums, regional and national events,
          virtual meetings and more that bring our industry together—giving
          everyone the opportunity to learn from thought leaders and
          contribute their own ideas.
        </h6>
      </div>
      <div className="col-sm-4 shadow-sm p-3">
        <h2>Leverage Industry Trends</h2>
        <h6>
          Stay ahead of the curve with access to industry-leading research,
          resources and tools that can help you establish your leadership
          around the latest technology trends and opportunities and solidify
          your position as a trusted business advisor.
        </h6>
      </div>
    </div>
  </div>
  <div className="container-100 bg-primary p-5">
    <div className="container">
      <h1 className="text-center mt-2 text-light">Featured Nerds</h1>
      <div className="row">
        <div className="col-sm-6 bg-dark mt-4" />
        <div className="col-sm-6 mt-4">
          <h3 className="text-light">
            Customers can book you online from their phone, tablet or
            computer.
          </h3>
          <h6 className="text-light">
            You can provide customers and business users with support services
            for computers, mobile phones, smart devices, software
            applications, tech lessons and more. <br /><br />
            Remote work is growing, and work hours are no longer limited to 9
            to 5. <br /><br />Employees are distributed, having limited access
            to IT support. <br /><br />Consumers and businesses can get 24/7
            on demand direct access to Nerds.
          </h6>
          <button className="btn btn-light text-primary w-100 rounded-3">
            <h6>SIGN UP NOW</h6>
          </button>
        </div>
      </div>
    </div>
  </div>
  <div className="container my-5">
    <div className="row">
      <div className="col-sm-6 bg-dark" />
      <div className="col-sm-6">
        <h2>
          We are looking for Nerds to cover on-site services countrywide
        </h2>
        <p>
          Please sign up and you could be the first person in your area to
          provide tech support services. Also note that there can be
          multiple nerds in one area as the demand is growing. You can
          select on-site and remote support options and select the services
          you offer in your profile info settings.
        </p>
        <button className="btn btn-primary text-light w-100 rounded-3 mt-4">
          <h6>SIGN UP AND START EARNING</h6>
        </button>
      </div>
    </div>
  </div>
</div>
<Footer />
    </>
  )
}

export default Nerds