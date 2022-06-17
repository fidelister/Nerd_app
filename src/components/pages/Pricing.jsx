// import React from 'react'
// import '../css/Pricing.css'
// import Footer from '../includes/Footer'
// import Navbar from '../includes/Navbar'
// function Pricing() {
//   return (
//     <>
//     <Navbar />
  
//    <div className="bg-light">
//   <div className="container w-75">
//     <h3 className="text-center mt-5">
//       Pricing for our on-site and remote tech support services
//     </h3>
//     <div className="row text-center justify-content-center">
//       <div className="col-sm-5 shadow-sm me-1 cols mt-2 bg-white">
//         <div className="text-center mt-5"><h3>On-Site Support</h3></div>
//         <div className="text-center mt-2"><h1>#44987</h1></div>
//         <div className="option mt-2">
//           <div>
//             <p> For the first hour incl. travel</p>
//             <p>₦6456.50 per 15 minutes thereafter</p>
//             <p>Connect to Nerds close to you</p>
//             <p> 500+ Nerds available</p>
//             <p>500+ Nerds available</p>
//             <p> Schedule a convenient time</p>
//             <p>  24x7x365</p>
//           </div>
//         </div>
//         <button className="btn btns btn-primary btn-sm shadow-sm mt-2" type="submit">
//           <h6>BOOK A NERD</h6>
//         </button>
//       </div>
//       <div className="col-sm-5 shadow-sm ms-1 cols mt-2 bg-white">
//         <div className="mt-5"><h3>Remote Support</h3></div>
//         <div className="text-center mt=2"><h1>₦6457</h1></div>
//         <div className="option mt-2">
//           <div>
//             <p> For the first 15 minutes</p>
//             <p> ₦6456.50 per 15 minutes thereafter</p>
//             <p> Support within seconds</p>
//             <p>500+ Nerds available</p>
//             <p> Schedule a convenient time</p>
//             <p> 24x7x365</p>
//           </div>
//         </div>
//         <button className="btn btns btn-primary btn-sm shadow-sm mt-2" type="submit">
//           <h6>BOOK A NERD</h6> 
//         </button>
//       </div>
//     </div>
//   </div>
//   <div className="container w-75 mt-5">
//     <div className="text-center mt-5">
//       <h3>
//         Business subscriptions &amp; pre-paid options
//       </h3>
//     </div>
//     <div className="row roww justify-content-center mt-3 ">
//       <div className="col-sm-5 colss me-1 shadow-sm mt-2">
//         <div className="row rows bg-dark text-light p-3">
//           <div className="col"><h5>Business</h5></div>
//           <div className="col ms-5"><h5>Prepaid</h5></div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <button className="btn btn-primary mb-3 w-100" type="button"><h6>BUY NOW</h6></button>
//       </div>
//       <div className="col-sm-5 colss ms-1 shadow-sm mt-2">
//         <div className="row rows bg-dark text-light p-3">
//           <div className="col"><h5>Business</h5></div>
//           <div className="col ms-4"><h5>Monthly</h5></div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <button className="btn btns btn-primary mb-3 w-100" type="button"><h6>BUY NOW</h6></button>
//       </div>
//     </div>
//     <div className="text-center mt-5">
//       <h3>
//         Consumer subscriptions &amp; pre-paid options
//       </h3>
//     </div>
//     <div className="row roww justify-content-center mt-3 ">
//       <div className="col-sm-5 colss me-1 shadow-sm mt-2">
//         <div className="row rows bg-dark text-light p-3">
//           <div className="col"><h5>Consumer</h5></div>
//           <div className="col ms-4"><h5>Prepaid</h5></div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <button className="btn btns btn-primary mb-3 w-100" type="button"><h6>BUY NOW</h6></button>
//       </div>
//       <div className="col-sm-5 colss ms-1 shadow-sm mt-2">
//         <div className="row rows bg-dark text-light p-3">
//           <div className="col"><h5>Consumer</h5></div>
//           <div className="col ms-4"><h5>Monthly</h5></div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <div className="p-3">
//           <div className="row">
//             <div className="col"><h6>5 hours Top Up</h6></div>
//             <div className="col ms-5"><h6>₦123964.80</h6></div>
//           </div>
//           <div className="row">
//             <div className="col"><h6>Credit</h6></div>
//             <div className="col ms-5">Save 4%</div>
//           </div>
//         </div>
//         <button className="btn btns btn-primary mb-3 w-100" type="button"><h6>BUY NOW</h6></button>
//       </div>
//     </div>
//   </div>
// </div>

// <Footer/>
//     </>
//   )
// }

// export default Pricing