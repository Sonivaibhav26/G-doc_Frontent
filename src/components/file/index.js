import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col , Divider} from 'antd';
import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

const File = () => {
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Layout>
    <Header>header</Header>
    <Layout>
      <Content>
      <>
    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Percentage columns
    </Divider>
    <Row>
      <Col flex={2}>2 / 5</Col>
      <Col flex={3}>3 / 5</Col>
    </Row>
    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Fill rest 
    </Divider>
    <Row>
      <Col flex="100px">100px</Col>
      <Col flex="auto">Fill Rest</Col>
    </Row>
    <Divider orientation="left" style={{ color: '#333', fontWeight: 'normal' }}>
      Raw flex style
    </Divider>
    <Row>
      <Col flex="1 1 200px">1 1 200px</Col>
      <Col flex="0 1 300px">0 1 300px</Col>
    </Row>
  </>
      </Content>
    </Layout>
  </Layout>
  );
};

export default File;