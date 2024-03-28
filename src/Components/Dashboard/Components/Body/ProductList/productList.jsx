import { Button, Card, Flex, Image, Typography } from "antd";
import React from "react";
import plantData from "../../../plantData";

const {Meta} = Card;

const ProductList = () => {
    return(
        <div style={{height: 360, width: '70%'}}>
            <Flex align="center" justify="space-between">
                <Typography.Title level={3} className="primary--color">
                    My Listing
                </Typography.Title>
                <Button type="link" className="gray--color">
                    View All
                </Button>
            </Flex>

            <Flex style={{gap: '1rem'}}>
                {plantData.map((plant) => (
                    <Card key={plant.id} hoverable className="plant-cards">
                        <Image src={plant.picture} style={{width: '170px'}}/>
                        <Meta title={plant.name} style={{marginTop: '1rem'}}></Meta>
                    </Card>
                ))}
            </Flex>
        </div>
    );
};

export default ProductList;