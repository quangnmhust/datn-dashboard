import { Flex } from "antd";
import React from "react";
import ProductList from "../ProductList/productList";
import DetailContent from "../DetailContent/DetailContent";

const MainContent = () => {
    return (
        <div style={{flex: 1}}>
            <Flex vertical gap='2.3rem'>
                <DetailContent></DetailContent>
                <ProductList></ProductList>
            </Flex>
        </div>
    )
};

export default MainContent;