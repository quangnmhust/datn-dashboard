import { Layout } from 'antd';
import { Menu } from "antd";
import { Button } from "antd";
import { RiMenuFoldFill, RiMenuUnfoldFill } from "react-icons/ri";
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'
import Sidebar from './Components/SideBar/Sidebar';
import CustomHeader from './Components/Header/Header';
import MainContent from './Components/Body/MainContent/Body';

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'><Sidebar/>
      <Button 
        type='text' 
        icon = {collapsed ? <RiMenuFoldFill/> : <RiMenuUnfoldFill/>}
        onClick = {() => setCollapsed(!collapsed)}
        className='triger-btn'
      />
      </Sider>
      <Layout>
        <Header className='headerDash'>
          <CustomHeader/>
        </Header>
        <Content className='contentDash'>
          <MainContent>
            
          </MainContent>
        </Content>
      </Layout>
    </Layout>
    )
}

export default Dashboard