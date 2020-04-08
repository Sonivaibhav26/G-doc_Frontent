
import { Row, Col, Divider, Tooltip } from 'antd';
import React from 'react'
import { Card } from 'antd';
import { Avatar } from 'antd';
import { Tabs } from 'antd';


import { Layout } from 'antd';
import Recentviews from './../recentviews'
import AddUser from './../addusers'

const { Header, Content, Sider } = Layout;
const { TabPane } = Tabs;

const Dashboard = () => {

  return (
    <div className="content">
      <Header className="header">
        <Tooltip placement="bottom" title="Name">
          <Avatar style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}>U</Avatar>
        </Tooltip>
      </Header>
      <div className="content">
        <Row gutter={16} >
          <Col span={16}>
            <Card title="Card title" bordered={false}>
              Card content
        </Card>
          </Col>
          <Col span={8}>
            <Card bordered={false}>
              <Tabs defaultActiveKey="1">
                <TabPane tab="Recent Views" key="1">
                  <AddUser />
                </TabPane>
                <TabPane tab="Add User" key="2">
                  <Recentviews />
                </TabPane>
              </Tabs>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Dashboard;