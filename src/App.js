import React from 'react';
import {Card, Row, Col } from 'antd';

import './App.css';

function App() {
  return (
    <div className="site-content">
    <div className="site-card-wrapper">
    <Row gutter={12}>
      <Col className="site-card-spacing" span={18}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col  className="site-card-spacing"  span={18}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col  className="site-card-spacing"  span={18}>
        <Card title="Card title" bordered={false}>
          Card contentc
        </Card>
      </Col>
      <Col  className="site-card-spacing"  span={18}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  </div>
  );
}

export default App;
