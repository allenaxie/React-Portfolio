import 'antd/dist/antd.css'
import './App.css';
import { Typography, Layout, Row, Col, Image } from "antd";
import NavigationBar from "./NavigationBar/NavigationBar";
import Hero from "./Hero/Hero";
import { useState } from "react";


export default function App() {

  const { Title } = Typography
  const {  Content, Footer, Sider, Header } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  
  return (
      <Layout 
      className="body"
      hasSider
      >
        <Sider 
        className="sider"
        trigger={null}
        collapsible
        collapsed={isNavCollapsed}
        >
          <NavigationBar isNavCollapsed={isNavCollapsed} setIsNavCollapsed={setIsNavCollapsed}/>
        </Sider>
        <Layout className="main-container">
          <Content className="main">
            <Row className="hero-container">
              <Col 
              md={{span:14, offset:1}}
              >
                <Hero/>
              </Col>
              <Col
              md={{span:8, offset:1}}
              >
                <Image
                src="https://i.imgur.com/5m65Hej.jpeg"
                />
              </Col>
            </Row>
            <Row>
              <Col>
              </Col>
            </Row>
          </Content>
          <Footer></Footer>

        </Layout>
      </Layout>

  );
}


