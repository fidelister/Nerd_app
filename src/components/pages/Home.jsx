import React from 'react'
import Footer from '../includes/Footer'
import Navbar from '../includes/Navbar'
import '../css/Home.css'
import Typewriter from 'typewriter-effect/dist/core';
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaUserTie} from 'react-icons/fa'
import { AiOutlineLike } from 'react-icons/ai'
import { FcAlarmClock, FcRating } from 'react-icons/fc'
import { GoGlobe, GoLocation} from 'react-icons/go'
function Home() {
    var app = document.getElementById('app');

    var typewriter = new Typewriter(app, {
        loop: true,
        delay: 75,
    });

    typewriter
        .pauseFor(1000)
        .typeString('<strong style="color:#0d6efd;"> Networking Software Security OutSourcing</strong>')
        .pauseFor(300)
        .deleteChars(20)
        .typeString('<strong  style="color:#0d6efd;"> IT Projects Requirements</strong>')
        .pauseFor(300)
        .deleteChars(24)
        .typeString('<strong  style="color:#0d6efd;">Business Shopping Analtyics Information</strong>')
        .pauseFor(1000)
        .start();
    return (
        <>
            <Navbar />
            <div className="container-fluid p-5">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <div>
                            <h2 className='text-start'> <span className='fw-bold'>IT Support, On-demand </span><br />  Services includes</h2> <p id="app" style={{ fontSize: '30px' }}></p>
                            <form className='shadow-lg p-5'>
                                <h2>How can we help you?</h2>
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option>On-site Support <small>N677000</small></option>
                                        <option>Remote Support <small>N88000</small></option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option>Computer Support</option>
                                        <option>Mobile devices </option>
                                        <option>Other Support</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <select className="form-select">
                                        <option>As soon as possible</option>
                                        <option>Shedule a convenient time</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control">
                                    </textarea>
                                </div>
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary fw-bold">Continue <BsFillArrowRightCircleFill /></button>
                                </div>
                            </form>
                        </div>

                    </div>
                    <div className="col-12 col-md-6">
                        <div className="backgroundCircle">
                            <img src={require('../../../src/Assets/images/OC3LE81.png')} alt="" height='400px' className='mt-5 ms-5' width="500px"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12 col-md-2">
                        <div className="d-flex  round">
                            <FaUserTie size={45} className=' me-2' />
                            <div>
                                <h2 className='h2Color fw-bold'>567</h2>
                                <p>Remote nerds</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="d-flex  round">
                            <AiOutlineLike size={45} className=' me-2' />
                            <div>
                                <h2 className='h2Color fw-bold'>99.6%</h2>
                                <p>Resolutions</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="d-flex  round">
                            <FcAlarmClock size={45} className=' me-2' />
                            <div>
                                <h2 className='h2Color fw-bold'>1 Min.</h2>
                                <p>Avg Response.</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="d-flex  round">
                            <GoLocation size={45} className=' me-2' />
                            <div>
                                <h2 className='h2Color fw-bold'>337</h2>
                                <p>On-Site nerds</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="d-flex  round">
                            <FcRating size={45} className=' me-2' />
                            <div>
                                <h2 className='h2Color fw-bold'>5.9+</h2>
                                <p>Nerd Rating</p>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-2">
                        <div className="d-flex  round">
                            <GoGlobe size={45} className=' me-2' />
                            <div>
                                <h2 className='h2Color fw-bold'>56</h2>
                                <p>Countries</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className="my-5 container-fluid">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img src={require('../../Assets/images/maps.jpg')} alt="" className='img1'/>
                    </div>
                    <div className="col-12 col-md-6">
                        <h2>Reliable IT-Support on demand</h2>
                        <p>NerdApp provides users with IT support services for computers, mobile phones, Wifi, internet, email, backups, printers, software applications, tech lessons and more.</p>
                        <p>You can get support within minutes or schedule a convenient time.</p>
                        <p>Remote work is growing, and work hours are no longer limited to 9 to 5.</p>
                        <p>Do your off-site employees have limited access to IT?</p>
                        <p>Users and businesses can now get 24/7 on demand direct access to our IT specialists.</p>
                        <a href="" className="btn btn-primary mt-3">Book a Nerd</a>
                    </div>
                </div>
            </div>
            <div className="my-5 container">
                <div className="row">
                <div className="col-12 col-md-6 mt-5">
                        <h2>IT-Support for your business</h2>
                        <p>Outsource your IT support to NerdApp. Build a team of favourite Nerds to service your users on-demand.</p>
                        <p>Your team will have direct access to our specialists for any IT issues or requirements.</p>
                        <p>We interview and verify every Nerd to ensure the highest possible service delivery for your business.</p>
                        <p>Fast, efficient and professional IT support where you control the spend.</p>
                        <p></p>
                        <a href="" className="btn btn-primary mt-3 w-100">Find out more</a>
                    </div>
                    <div className="col-12 col-md-6">
                        <img src={require('../../Assets/images/6531.jpg')} alt="" className='img2' />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home