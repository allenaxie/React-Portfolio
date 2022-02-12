import 'antd/dist/antd.css'
import './App.css';
import { Typography, Layout, Row, Col } from "antd";
import NavigationBar from "./NavigationBar/NavigationBar";
import About from "./About/About";
import { useState } from "react";


export default function App() {

  const { Title } = Typography
  const {  Content, Footer, Sider, Header } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  
  return (
      <Layout 
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
        <Layout>
          <Content className="main">
            <Row>
              <Col className="about-container">
                <About/>
              </Col>
            </Row>
          </Content>
          <Footer></Footer>

        </Layout>
      </Layout>

  );
}


