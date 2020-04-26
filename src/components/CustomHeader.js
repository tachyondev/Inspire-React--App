import React, { Component } from 'react';
import { Layout, Menu } from 'antd';
import {SearchOutlined} from '@ant-design/icons'
import './CustomHeader.css';

const { Header } = Layout;

class MainHeader extends Component {

  render() {
    return (
      <Header className="header-background">
        <Menu mode="horizontal" className="menu-left">
          <Menu.Item className="header-menu-text">Home</Menu.Item>
          <Menu.Item className="header-menu-text">Consert</Menu.Item>
          <Menu.Item className="header-menu-text">Trips</Menu.Item>
          <Menu.Item className="header-menu-text">Contact</Menu.Item>
        </Menu>
        <Menu mode="horizontal" className="menu-right">
          <Menu.Item className="header-menu-text">Login</Menu.Item>
          <Menu.Item className="header-menu-text"><SearchOutlined /></Menu.Item>
        </Menu>
      </Header>
    )
  }
}

export default MainHeader;
