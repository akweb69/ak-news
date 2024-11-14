import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import '../App.css';
import profile from '../assets/icon/profile.png'

const Navbar = () => {
    return (
        <div>
            <div className="navbar  w-11/12 mx-auto p-0">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="mr-2 lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-72 p-2 shadow">
                            <li><NavLink to={'/'}>Home</NavLink></li>
                            <li><NavLink to={'/about'}>About</NavLink></li>
                            <li><NavLink to={'/career'}>Career</NavLink></li>

                        </ul>
                    </div>
                    <a className=" text-xl md:text-2xl title font-bold bg-gradient-to-tr from-purple-800 to-pink-500 text-transparent bg-clip-text ">AKNews</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to={'/'}>Home</NavLink></li>
                        <li><NavLink to={'/about'}>About</NavLink></li>
                        <li><NavLink to={'/career'}>Career</NavLink></li>

                    </ul>
                </div>
                <div className="navbar-end gap-3 items-center">
                    <div className="w-10 bg-purple-800 rounded-full">
                        <img className='w-full' src={profile} alt="" />
                    </div>
                    <div className="">
                        <Link to={'/login'} className="bg-purple-950 px-4 py-2 text-white font-semibold ">Login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;