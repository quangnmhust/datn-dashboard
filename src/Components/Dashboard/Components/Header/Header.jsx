import { MessageOutlined, NotificationOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Flex, Typography } from "antd";
import Search from "antd/es/input/Search";
import React from "react";

const CustomHeader = () => {
    return (
        <Flex align='center' justify='space-between' className="cusHeader">
            <Typography.Title level={3} type="secondary">
                Welcome back, Username!
            </Typography.Title>

            <Flex align="center" gap='3rem'>
                <Search placeholder="Search dashboard" allowClear/>
                <Flex align="center" gap='10px'>
                    <MessageOutlined className="headerIcon"/>
                    <NotificationOutlined className="headerIcon"/>
                    <Avatar icon={<UserOutlined/>}/>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CustomHeader;