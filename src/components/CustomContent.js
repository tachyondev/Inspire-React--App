import React, { Component } from 'react';
import { Layout } from 'antd';
import { PlayCircleOutlined } from '@ant-design/icons';
import './CustomContent.css';

const { Content } = Layout;
class CustomContent extends Component {
    render() {
        return (
            <Content className="content-size">
                <div className="content-div">
                    <h1 className="content-text">INSPIRE</h1>
                    <h6 className="content-sub-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
                      nascetur ridiculus mus.</h6>
                    <div className="content-play-div">
                        <PlayCircleOutlined className="content-play-logo" />
                        <h4 className="content-play-text">Play all videos</h4>
                    </div>
                    <div className="content-toast-div">
                        <p className="content-toast-text"> Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.</p>
                    </div>
                </div>
            </Content>
        )
    }
}
export default CustomContent;