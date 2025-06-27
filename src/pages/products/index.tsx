import React from "react";
import { HomeOutlined, UserOutlined } from '@ant-design/icons';
import { Breadcrumb } from 'antd';

const items = [
    {
        href: '/',
        title: <HomeOutlined />,
    },
    {
        title: 'Sản Phẩm',
    },
]

const Products = () => {
    return (
        <div>
            <Breadcrumb items={items} />
            <h1>Products</h1>
        </div>
    )
}
export default Products;