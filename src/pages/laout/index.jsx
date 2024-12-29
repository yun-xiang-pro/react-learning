import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Breadcrumb, Layout, Menu } from 'antd';
  import React, { useState } from 'react';
  import style from './index.module.css'
  import RouterApps  from '../../router-app';
  import { NavLink,useNavigate,Outlet } from "react-router-dom"
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('首页', '/', <PieChartOutlined />),
    getItem('文章管理', 'sub-articles', <UserOutlined />, [
      getItem('添加文章', '/pages/add-article'),
      getItem('文章列表', '/pages/article-list'),
    
    ]),
   
    getItem('Java', '/pages/java', <FileOutlined />),
    getItem('Pathyon', '/pages/pathyon', <FileOutlined />),
    getItem('Node', '/pages/node', <FileOutlined />),
    getItem('Js', '/pages/js', <FileOutlined />),
  ];

 
  const App = () => {
    const navigate = useNavigate();
    const [collapsed, setCollapsed] = useState(false);

    const menuSelect = (menu) => {
        navigate(menu.key)
        console.log('menu:', menu)
    
      }
    return (
        <div className={style.layoutContainer}>
            <Layout>
                <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="logo" />
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} onSelect={menuSelect} />
                </Sider>
                <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                    padding: 0,
                    }}
                />
                <Content
                    style={{
                    margin: '0 16px',
                    }}
                >
                    <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                    >
                    <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item>
                    </Breadcrumb>
                    <div
                    className="site-layout-background"
                    style={{
                        padding: 24,
                        minHeight: 360,
                    }}
                    >
                    <RouterApps/>
                    </div>
                </Content>
                <Footer
                    style={{
                    textAlign: 'center',
                    }}
                >
                    Ant Design ©2018 Created by Ant UED
                </Footer>
                </Layout>
            </Layout>
        </div>
    );
  };
  export default App;