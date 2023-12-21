import React from "react";

const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>Land Destination</h1>
            </div>
            <nav className="navigation">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Listings</a></li>
                    <li><a href="/">Agents</a></li>
                    <li><a href="/">Contact Us</a></li>
                </ul>
            </nav>
            <div className="btn">
                <button type="button"><a href="">Login</a></button>
            </div>
        </div>
    );
}
export default Header;