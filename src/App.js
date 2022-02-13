import 'antd/dist/antd.css'
import './App.css';
import { Typography, Layout, Row, Col, Image, Divider } from "antd";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";


export default function App() {

  const { Title } = Typography
  const {  Content, Footer, Sider, Header } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  
  return (
      <Layout 
      className="body"
      hasSider
      >
        {/* Navbar */}
        <Sider 
        className="sider"
        trigger={null}
        collapsible
        collapsed={isNavCollapsed}
        >
          <NavigationBar isNavCollapsed={isNavCollapsed} setIsNavCollapsed={setIsNavCollapsed}/>
        </Sider>
        {/* Main Content */}
        <Layout className="main-container">
          <Content className="main">
            {/* Hero Section */}
            <Row className="hero-section">
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
            {/* About Me */}
            <Row className="about-section">
              <Col className="about-container">
                <About/>
              </Col>
            </Row>
          </Content>
          <Footer className="footer-container"></Footer>

        </Layout>
      </Layout>

  );
}


