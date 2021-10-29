import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {

    const { user, logOut } = useAuth();

    const activeStyle = {
        color: "black",
        backgroundColor: "white",
        transition: ".5s ease-in",
        borderBottom: "1px solid red",
    };
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ backgroundColor: "#63599E" }}>
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-2" to="/home"><span className="text-warning fs-4">Holiday</span> <span>Travel</span></NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        {
                            user?.email ? <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/resorts">Resorts</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/about">About Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/contact">Contact Us</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/myOrders">My Oredrs</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/manageOrder">Manage All Orders</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/addResort">Add a Resort</NavLink>
                                </li>

                                <li className="nav-item">
                                    <button onClick={logOut} className="btn btn-danger fs-6">Logout</button>
                                </li>

                            </ul>
                                : <ul className="navbar-nav ms-auto">

                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " aria-current="page" to="/home">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/resorts">Resorts</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/about">About Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/contact">Contact Us</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeStyle={activeStyle} className="nav-link active mx-1 fs-6 " to="/login">Sign In <span><i className="fas fa-user"></i></span> </NavLink>
                                    </li>
                                </ul>
                        }
                        <div className="text-center">
                            <img className="img-fluid w-25 rounded-circle px-2" src={user?.photoURL} alt="" />
                            <span className="text-light">{user?.displayName}</span>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;