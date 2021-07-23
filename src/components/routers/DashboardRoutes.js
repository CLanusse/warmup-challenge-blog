import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { CreateScreen } from '../CreateScreen/CreateScreen'
import { DetailScreen } from '../DetailScreen/DetailScreen'
import { EditScreen } from '../EditScreen/EditScreen'
import { Footer } from '../Footer/Footer'
import { HomeScreen } from '../HomeScreen/HomeScreen'
import { Navbar } from '../NavBar/Navbar'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />
            
            <div className="mh-all">
                <Switch>
                    <Route exact path="/" component={HomeScreen}/>
                    <Route exact path="/detail/:id" component={DetailScreen}/>
                    <Route exact path="/create" component={CreateScreen}/>
                    <Route exact path="/edit/:id" component={EditScreen}/>
                    
                    <Redirect to="/"/>
                </Switch>
            </div>

            <Footer/>
        </>
    )
}
