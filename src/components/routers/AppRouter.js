import React from 'react'
import { BrowserRouter as Router,Switch } from "react-router-dom";
import { LoginScreen } from '../LoginScreen/LoginScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';
import { useSelector } from 'react-redux';

export const AppRouter = () => {

    const {uid} = useSelector(state => state.auth)

    return (
    <Router>
        <div>
            <Switch>
                <PublicRoute 
                    exact path="/login" 
                    isAuthenticated={uid}
                    component={ LoginScreen }/>
                <PrivateRoute 
                    isAuthenticated={uid}
                    path="/" 
                    component={ DashboardRoutes }/>
            </Switch>
        </div>
    </Router>
    )
}
