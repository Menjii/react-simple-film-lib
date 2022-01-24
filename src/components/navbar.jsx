import React from "react";
import { isExpired, decodeToken } from "react-jwt";
import { Link } from "react-router-dom";
import SearchForm from "./searchForm";

const Navbar = () => {

    const user = decodeToken(localStorage.getItem('token'));
    const isNotLoggedIn = isExpired(localStorage.getItem('token'));

    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link to="/" className="navbar-brand" id="pills-home-tab" data-toggle="pill" role="tab"
                                aria-controls="pills-home" aria-selected="true">Filmweb</Link>
                </div>
                <ul className="nav nav-pills ml-auto" id="pills-tab" role="tablist">
                    <SearchForm />
                    <li className="nav-item" role="presentation">
                        <Link to="/films" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                            aria-controls="pills-home" aria-selected="true">Filmy</Link>
                    </li>
                    {isNotLoggedIn && <li className="nav-item" role="presentation">
                        <Link to="/login" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                            aria-controls="pills-home" aria-selected="true">Login</Link>
                    </li>}
                    {isNotLoggedIn &&<li className="nav-item" role="presentation">
                        <Link to="/signup" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                            aria-controls="pills-home" aria-selected="true">Registration</Link>
                    </li>}
                    <li className="nav-item" role="presentation">
                    {user && <p className="nav-link">User: {user.name}</p>}
                    </li>
                    {!isNotLoggedIn &&<li className="nav-item" role="presentation">
                        <a href="/" className="nav-link" id="pills-home-tab" data-toggle="pill" role="tab"
                                  aria-controls="pills-home" aria-selected="true" onClick={() => localStorage.removeItem('token')}>LogOut</a>
                    </li>}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;