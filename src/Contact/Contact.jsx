import "./Contact.css"
import { Typography, Divider, Card, Avatar, Row, Col, Tag, Button, Form, Input, notification } from "antd";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';


export default function Contact () {
    const { Title } = Typography;
    const { Meta } = Card;
    const [form] = Form.useForm();


    // handle form 
    const [state, handleFinish] =useForm("xoqrdpkb")
    if (state.succeeded) {
        openNotification();
        form.resetFields();
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
        <>
            <Title className="contact-divider"> Contact Me</Title>
            <Col
            xs={{span:24, offset:2}}
            sm={{span:24, offset:1}}
            lg={{span:16, offset:2}}
            >
            
                <Form
                name="contact-form"
                form={form}
                labelCol={{span:5}}
                wrapperCol={{span:16}}
                initialValues={{remember:true}}
                onFinish={handleFinish}
                onFinishFailed={handleFinishFailed}
                autoComplete="off"
                >
                    <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                        {required:true, message:"Please let me know your name 😢" }]}
                    >
                        <Input
                        placeholder="Kindly enter your name here."
                        />
                    </Form.Item>
                    <Form.Item
                    label="Company"
                    name="company"
                    >
                        <Input
                        placeholder="Company name?"
                        />
                    </Form.Item>
                    <Form.Item
                    label="Email"
                    name="email"
                    required
                    rules={[
                        {required:true, message:"Don't forget to enter your email ✉️!" }]}
                    >
                        <Input
                        placeholder="Please enter your email here."
                        />
                    </Form.Item>
                    <Form.Item
                    label="Message"
                    name="message"
                    required
                    rules={[
                        {required:true, message:"Don't forget your message 😄" }]}
                    >
                        <Input.TextArea
                        placeholder="Please enter your message here."
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                        <Button type="submit" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            
        </>
    )
}