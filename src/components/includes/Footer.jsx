import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Footer.css'
import {BsFacebook, BsInstagram,BsLinkedin, BsTwitter} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc'


function Footer() {
    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-3">
                            <ul>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Services</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>About</Link>
                                </li>
                                <li>
                                    <Link to='/business' className='nav-link text-white '>Business</Link>
                                </li>
                                <li>
                                    <Link to='/contact' className='nav-link text-white '>Contact</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                        <ul>
                                <li>
                                    <Link to='/Nerds' className='nav-link text-white '>Nerds</Link>
                                </li>
                                <li>
                                    <Link to='/Blog' className='nav-link text-white '>Blogs</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Help center</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Terms & Conditions</Link>
                                </li>
                               
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                        <ul>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Jobs for nerds</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Patner Program</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Vouchers</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Play</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '>Services</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-12 col-md-3">
                        <ul>
                                <li>
                                    <Link to='/services' className='nav-link text-white '><BsFacebook className='me-2'/>Facebook</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '><BsInstagram className='me-2'/>Instagram</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '><BsTwitter className='me-2'/>Twitter</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '><FcGoogle className='me-2'/>Google</Link>
                                </li>
                                <li>
                                    <Link to='/services' className='nav-link text-white '><BsLinkedin className='me-2'/>LinkedIn</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <p className="text-center text-white">© 2022, Nerdapp.com</p>
                </div>
            </footer>
        </>
    )
}

export default Footer