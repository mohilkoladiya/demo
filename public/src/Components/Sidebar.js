import { Layout, Menu, Card } from 'antd';
import { DesktopOutlined, TableOutlined, UserOutlined, } from '@ant-design/icons';
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
const { Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
export class Sidebar extends Component {
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };

    render() {
        const { collapsed } = this.state;
        return (
            <Layout style={{ minHeight: '100vh', minWidth: '10vh' }}>
                <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline">
                        <Menu.Item key="1" icon={<DesktopOutlined />}><Link to="/dash" />Dashbord</Menu.Item>

                        <Menu.Item key="2" icon={<UserOutlined />}><Link to="/profile" />Profile</Menu.Item>

                        <Menu.Item key="3" icon={<TableOutlined />}>Table</Menu.Item>
                    </Menu>
                </Sider>

            </Layout>
        );
    }
}
export default Sidebar