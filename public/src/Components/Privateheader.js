import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, useHistory } from 'react-router-dom';

const { Header } = Layout;

function Privateheader() {
    let history = useHistory()
    const isLoggin = () => localStorage.clear("loginToken")
    const logoutHandler = () => {
        isLoggin()
        history.push("/login")
        window.location.reload()
    }

    return (
        <Layout className="site-layout">
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Header style={{ position: 'fixed', zIndex: 10, width: '100%' }}>
                <div className="logo" />
                <Menu theme="dark" mode="horizontal" className="d-flex justify-content-end">
                    <Menu.Item key="2" onClick={() => { logoutHandler() }}>Logout</Menu.Item>
                </Menu>
            </Header>
        </Layout>
    )
}
export default Privateheader
