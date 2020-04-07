import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col , Divider} from 'antd';
import React from 'react'
import { Layout } from 'antd';
import { Card } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const Dashboard = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="content">
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Card title" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </div>
  </div>
  );
};

export default Dashboard;