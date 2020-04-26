import React, { Component } from 'react';
import {Layout} from 'antd';
import CustomHeader from './CustomHeader';
import CustomContent from './CustomContent';
import './CustomLayout.css'

class MainLayout extends Component {
    render() {
        return (<div>
            <Layout className="layout-background">
            <CustomHeader></CustomHeader>
            <CustomContent></CustomContent>
            </Layout>
        </div>
        )
    }
}

export default MainLayout;
