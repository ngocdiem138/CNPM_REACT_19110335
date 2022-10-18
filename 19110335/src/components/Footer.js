import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "../style/Footer.css"
function Footer() {
    return (
        <div className="Footer">
            <div class="footer-copywright">© 2022 Le Thi Ngoc Diem_19110335</div>
            <div className="container-fluid Header-right">
                <nav id="navbar-main" className={`container navbar text-black `}
                    style={{ fontSize: "18px" }}>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto ">
                            <li className="header-link">
                                <Link to={"/"}><span className="nav-link pl-5 pr-5">Privacy Policy</span></Link>
                            </li>
                            <li className="header-link">
                                <Link to={"/contacts"}><span className="nav-link pl-5 pr-5">CONTACT ME</span></Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default Footer;