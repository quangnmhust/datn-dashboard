import { Button, Card, Flex, Typography } from "antd";
import React from "react";
import "leaflet/dist/leaflet.css";

const MapLeaf = () => {
    
    return (
        <Card style={{height: 360, width: '70%'}}>
            <Flex vertical gap="10px">

                <Flex vertical align="flex-start">
                    <Typography.Title level={2} strong>
                        Map Lefleaf
                    </Typography.Title>
                    <Typography.Text type="">
                        jashkdhasjdhajkdhajkdhajkdhaskjdhaskjdhasjdbqwuiytqiowhajnksdb
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

export default MapLeaf;