import React from "react";
import { Space, Spin } from 'antd';

// small function for loading wait component
export default function Loader(){
    return (
    <div className="loader"> 
    <p>Loading.. Please Wait.</p>
    <Space size="middle">
        <Spin size="large" />
        </Space>
        </div>
        );
}