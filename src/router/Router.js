import React, { useEffect, useState } from 'react'
import Switch from 'react-bootstrap/esm/Switch'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import Home from '../screens/Home'
import Loginform from '../screens/LoginForm'
import Registrationform from '../screens/RegistrationForm'
import Contactus from '../screens/Contactus'
import Header from '../components/Header'
import Dashbord from '../screens/Dashbord'
import Privateheader from '../components/PrivateHeader'
import Sidebar from '../components/Sidebar'
import PrivateRouter from './PrivateRouter/PrivateRouter'
import '../assets/CSS/Router.css'
import Profile from '../screens/Profile'
import ResetPassword from '../screens/ResetPassword'
import CreateBlog from '../screens/CreateBlog'
import Forgetpassword from '../screens/ForgetPassword'
import Newpassword from '../screens/NewPassword'
import BlogDetails from '../screens/BlogDetails'
import Fotter from '../components/Fotter'
import Allblog from '../screens/AllBlog'

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
                                <Route exact path="/RegistrationForm" component={Registrationform} />
                                <Route exact path="/contactus" component={Contactus} />
                                <Route exact path="/forget" component={Forgetpassword} />
                                <Route path="/forget-password/link/" component={Newpassword} />

                                <PrivateRouter exact path="/dash" component={Dashbord} />
                                <PrivateRouter exact path="/profile" component={Profile} />
                                <PrivateRouter exact path="/resetpassword" component={ResetPassword} />
                                <PrivateRouter exact path="/blog" component={CreateBlog} />
                                <PrivateRouter exact path="/blog-detail" component={BlogDetails} />
                                <PrivateRouter exact path="/all-blog" component={Allblog} />
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
