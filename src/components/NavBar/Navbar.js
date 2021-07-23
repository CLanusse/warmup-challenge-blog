import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../../actions/auth';
import { clearPosts } from '../../actions/notes';

export const Navbar = () => {

    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch( logout() )
        dispatch( clearPosts() )
    }

    return (
        <nav className="navbar navbar-expand-md navbar-light" id="mainNav">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                BlogApp
            </Link>

            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarResponsive">
                <div className="navbar-nav ms-auto">

                    <NavLink 
                        activeClassName="active"
                        className="nav-link px-lg-3 py-3 py-lg-4" 
                        exact to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-link px-lg-3 py-3 py-lg-4" 
                        exact to="/create"
                    >
                        Create Post
                    </NavLink>

                    <button 
                        className="btn px-lg-3 py-3 py-lg-4 btn-logout"                         
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>

        
            
        </nav>
    )
}