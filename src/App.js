import 'antd/dist/antd.css'
import './App.css';
import { Typography, Layout, Menu } from "antd";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useState } from "react";


export default function App() {

  const { Title } = Typography
  const { Header, Content, Footer, Sider } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)

  
  return (
      <Layout >
        <Sider 
        className="nav-container"
        trigger={null}
        collapsible
        collapsed={isNavCollapsed}
        >
         
          <NavigationBar isNavCollapsed={isNavCollapsed} setIsNavCollapsed={setIsNavCollapsed}/>
        </Sider>
        <Layout>
          <Content className="main">
            

          </Content>
          <Footer></Footer>

        </Layout>
      </Layout>

  );
}


