import { Layout } from 'antd';
import Sider from 'antd/es/layout/Sider'
import { Content, Header } from 'antd/es/layout/layout';
import React, { useState } from 'react'

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false)
  return (
    <Layout>
      <Sider theme='light' trigger={null} collapsible collapsed={collapsed} className='sider'>

      </Sider>
      <Layout>
        <Header></Header>
        <Content></Content>
      </Layout>
    </Layout>
    )
}

export default Dashboard