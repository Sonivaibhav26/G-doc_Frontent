import { Form, Input, Button, Checkbox } from 'antd';
import { Row, Col } from 'antd';
import React from 'react'
import './login.css';
import axios from 'axios';

const layout = {
  labelCol: {
    span: 0,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export default class Login extends React.Component {

  onFinish = values => {
    let { username, password } = values;
    axios.post(`http://localhost:8080/api/login/`, { username, password })
      .then(res => {
        console.log(res);
        // this.setState({ persons });
      })
    console.log('Success:', values);
  };

  onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  render() {
    return (
      <Row className="content" justify="center" align="middle">

        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }}>
          <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: false,
            }}
            onFinish={this.onFinish}
            onFinishFailed={this.onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your username!',
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">Submit</Button>
              <Button type="link" htmlType="button" href='/register/'>
                Register
                </Button>
            </Form.Item>
          </Form>

        </Col>

      </Row>
    );
  }
};

