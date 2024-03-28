import { Flex, Menu } from "antd";
import React from "react";

import picture from '../../../../LoginAssets/Lovepik.png'
import { CarryOutOutlined, LogoutOutlined, OrderedListOutlined, ProfileOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";

const Sidebar = () => {
    return (
        <div>
            <Flex align="center" justify="center">
                <div className="logo">
                    <img src={picture} alt='Logo Image'/>   
                </div>
            </Flex>

            <Menu mode="inline" defaultSelectedKeys={[1]} className="menu-bar"
                items={[
                    {
                        key :'1',
                        icon: <UserOutlined/>,
                        label: 'Dashboard'
                    },
                    {
                        key :'2',
                        icon: <CarryOutOutlined/>,
                        label: 'My Oders'
                    },
                    {
                        key :'3',
                        icon: <OrderedListOutlined/>,
                        label: 'To Do'
                    },
                    {
                        key :'4',
                        icon: <ProfileOutlined/>,
                        label: 'Profile'
                    },
                    {
                        key :'5',
                        icon: <SettingOutlined/>,
                        label: 'Setting'
                    },
                    {
                        key :'6',
                        icon: <LogoutOutlined/>,
                        label: 'Log out'
                    }
            ]}
            />
        </div>
    )
}

export default Sidebar