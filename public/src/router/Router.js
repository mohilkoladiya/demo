import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../screens/Home'
import Loginform from '../screens/Loginform'
import Registrationform from '../screens/Registrationform'
import Contactus from '../screens/Contactus'
import Header from '../Components/Header'
import Dashbord from '../screens/Dashbord'
import Privateheader from '../Components/Privateheader'
import Sidebar from '../Components/Sidebar'
import PrivateRouter from './Private-Router/Privaterouter'
import '../assets/CSS/Router.css'
import Profile from '../screens/Profile'
import ResetPassword from '../screens/Resetpassword'
import CreateBlog from '../screens/Createblog'
import Forgetpassword from '../screens/Forgetpassword'
import Newpassword from '../screens/Newpassword'
import Blogdetails from '../screens/Blogdetails'
import Fotter from '../Components/Fotter'
function Router1() {
    const isLoggin = localStorage.getItem("loginToken")
    return (
        <>
            <Router>
                <div>
                    {/* --------------------header ------------------ */}
                    {
                        isLoggin ? (<Privateheader />) : (<Header />)
                    }
                    {/* ------------------ content --------------------- */}
                    <div className="mainContent">
                        {isLoggin && (<div className="sidebar"><Sidebar /></div>)}
                        <div className={
                            isLoggin ? 'content' : 'fullContent'
                        }>
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/home" component={Home} />
                                <Route exact path="/login" component={Loginform} />
                                <Route exact path="/Registrationform" component={Registrationform} />
                                <Route exact path="/contactus" component={Contactus} />
                                <Route exact path="/forget" component={Forgetpassword} />
                                <Route path="/forget-password/link/" component={Newpassword} />

                                <PrivateRouter exact path="/dash" component={Dashbord} />
                                <PrivateRouter exact path="/profile" component={Profile} />
                                <PrivateRouter exact path="/resetpassword" component={ResetPassword} />
                                <PrivateRouter exact path="/blog" component={CreateBlog} />
                                <PrivateRouter exact path="/blog-detail" component={Blogdetails} />
                            </Switch>
                            
                        </div>
                    </div>
                    <Fotter />
                </div>
            </Router>
        </>
    )
}
export default Router1
