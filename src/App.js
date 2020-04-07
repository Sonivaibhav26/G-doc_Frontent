import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';


import Routes from '../src/routes/index'

class App extends Component {

  render() {
    const { Header, Footer, Sider, Content } = Layout;
    return (
      <div>
        <Layout>
          <Content> </Content>
          <Routes />
        </Layout>
      </div>


    );
  }
}

export default App;
