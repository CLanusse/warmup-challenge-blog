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
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                BlogApp
            </Link>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <div className="navbar-nav ">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-center ml-2 mr-2" 
                        exact to="/"
                    >
                        Home
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link text-center ml-2 mr-2" 
                        exact to="/create"
                    >
                        Create Post
                    </NavLink>

                    <button 
                        className="btn btn-primary m-auto"                         
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                </div>
            </div>

        
            
        </nav>
    )
}