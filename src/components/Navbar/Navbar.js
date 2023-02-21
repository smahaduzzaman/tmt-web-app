import React from 'react';

const Navbar = () => {
    return (
        <div classNameName="header-nav">
            <div classNameName="nav-brand">
                <a href="/home"><h1>TmT</h1></a>
            </div>
            <ul classNameName="nav-list">
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/task">Tasks</a></li>
                <li><a href="/blog">Blog</a></li>
            </ul>
        </div>
    );
};

export default Navbar;