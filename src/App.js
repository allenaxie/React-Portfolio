import 'antd/dist/antd.css'
import './App.css';
import { Typography, Layout } from "antd";

export default function App() {

  const { Title } = Typography
  const { Header, Content, Footer } = Layout

  return (
    <div className="App">
      <Layout>
        <Header>

        </Header>
        <Content>
          <Title>Hey</Title>

        </Content>
        <Footer></Footer>
      </Layout>
    </div>
  );
}


