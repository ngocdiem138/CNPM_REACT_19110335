import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../style/Header.css"
function Header() {
    return (
        <div className="Header">
            <div className="container-fluid Header-left">
                <img src="https://dynl.mktgcdn.com/p-sandbox/FVCnI4EXZe3nj2hzKvJLgzIbTZ4YWRmYZCMvdjlXGR0/3000x3000.pn" className="rounded mx-auto d-block" />
            </div>
            <div className="container-fluid Header-right">
                <nav id="navbar-main" className={`container navbar text-black `}
                    style={{ fontSize: "18px" }}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="header-link">
                                <Link to={"/"}><span className="nav-link pl-5 pr-5">HOME</span></Link>
                            </li>
                            <li className="header-link">
                                <Link to={{ pathname: "/", state: { id: "all" } }}>
                                    <span className="nav-link pl-5 pr-5">Menu</span></Link>
                            </li>
                            <li className="header-link">
                                <Link to={"/contacts"}><span className="nav-link pl-5 pr-5">CONTACTS</span></Link>
                            </li>
                            <li className="header-link">
                                <Link to={"/"}><span className="nav-link pl-5 pr-5">Jobs</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Header;