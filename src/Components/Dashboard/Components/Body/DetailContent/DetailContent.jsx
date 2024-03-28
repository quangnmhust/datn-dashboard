import { Button, Card, Flex, Typography } from "antd";
import React from "react";
import "leaflet/dist/leaflet.css";

const DetailContent = () => {
    
    return (
        <Card style={{height: 360, width: '70%'}}>
            <Flex vertical gap="0px">
                <Flex vertical align="flex-start">
                    <Typography.Title level={2} strong>
                        Name Device
                    </Typography.Title>
                    <Typography.Text type="text">
                        Trang thai device
                    </Typography.Text>

                </Flex>

                

                <Flex gap="large">
                    <Button type="primary" size="large">
                        Explore More
                    </Button>
                    <Button size="large">
                        Top Sellers
                    </Button>
                </Flex>

            </Flex>

        </Card>
    )
};

export default DetailContent;