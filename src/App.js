import 'antd/dist/antd.css'
import './App.css';
import { Typography, Layout, Row, Col, Image, Divider } from "antd";
import NavigationBar from "./NavigationBar/NavigationBar";
import { useState } from "react";
import Hero from "./Hero/Hero";
import About from "./About/About";
import Projects from "./Projects/Projects";
import Contact from "./Contact/Contact";
import { Routes, Route } from "react-router-dom";
import { Form, notification } from 'antd';
import { useForm, ValidationError } from '@formspree/react';



export default function App() {

  const { Title } = Typography
  const {  Content, Footer, Sider, Header } = Layout;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true)
  const [form] = Form.useForm();

  const [state, handleFinish] = useForm("xoqrdpkb")
  if (state.succeeded) {
    form.resetFields();
    console.log('form submitted successfully!')
  }
  
  function handleFinishFailed (errorInfo) {
    console.log('failed', errorInfo);
  }

  function openNotification () {
    return notification.open({
        message:'Form Submitted Successfully!',
        description:"Thank you for reaching out to me. I will reply to you as soon as I can!"
    })
}


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
        <Layout className="main-container" id="home">
          <Content className="main">
            {/* Hero Section */}
            <Row className="hero-section">
              <Col 
              md={{span:14, offset:5}}
              lg={{span:14, offset:1}}
              >
                <Hero/>
              </Col>
              <Col
              md={{span:14, offset:5}}
              lg={{span:8, offset:1}}
              >
                <Image
                src="https://i.imgur.com/5m65Hej.jpeg"
                className="profile-pic"
                />
              </Col>
            </Row>
            {/* About Me */}
            <Row className="about-section" id="about">
              <Col className="about-container">
                <About  />
              </Col>
            </Row>
            {/* Projects */}
            <Row className="projects-section" id="projects">
              <Col className="projects-container">
                <Projects/>
              </Col>
            </Row>
            {/* Contact */}
            <Row className="contact-section" id="contact">
              <Col className="contact-container">
                <Contact 
                handleFinish={handleFinish} 
                handleFinishFailed={handleFinishFailed} 
                form={form}
                openNotification={openNotification}
                />
              </Col>
            </Row>
          </Content>
          <Footer className="footer-container"></Footer>
        </Layout>
      </Layout>

  );
}


