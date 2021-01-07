import React from 'react'
import { Layout, Menu, Breadcrumb, Card } from 'antd';
import { Link } from "react-router-dom";

const { Header } = Layout;



function Frontpage() {
    const headerContainer= {
        position:'fixed',
        top:0,
        zIndex:"2"
    }

    return (
        <Layout className="site-layout" style={headerContainer}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" className="d-flex justify-content-end">
                    <Menu.Item key="1"><Link to="/home">Home</Link></Menu.Item>
                    <Menu.Item key="2"><Link to="/contactus">Contact Us</Link></Menu.Item>
                    <Menu.Item key="3"><Link to="login">Login</Link></Menu.Item>
                </Menu>
            </Header>
        </Layout>
    );
}
export default Frontpage    
