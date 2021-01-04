import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from './Public/Home'
import Loginform from './Public/Loginform'
import Registrationform from './Public/Registrationform'
import Contactus from './Public/Contactus'
import Header from './Public/Header'
import Dashbord from './Private/Dashbord'
import Privateheader from './Private/Privateheader'
import Sidebar from './Private/Sidebar'
import PrivateRouter from './Private-Router/Privaterouter'
import './CSS/Router.css'
import Profile from './Private/Profile'
import ResetPassword from './Private/Resetpassword'
import CreateBlog from './Private/Createblog'
import Forgetpassword from './Public/Forgetpassword'
import Newpassword from './Public/Newpassword'
import Blogdetails from './Private/Blogdetails'
import Fotter from './Public/Fotter'
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
