import "./Contact.css"
import { Typography, Divider, Card, Avatar, Row, Col, Tag, Button, Form, Input, notification, message } from "antd";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useForm, ValidationError } from '@formspree/react';
import { useState, useEffect } from 'react';

export default function Contact ({handleFinish, handleFinishFailed, form, openNotification}) {
    const { Title } = Typography;
    const { Meta } = Card;
    // const [form] = Form.useForm();

    // handle form 
    // const [state, handleFinish] = useForm("xoqrdpkb")
    // if (state.succeeded) {
        // openNotification();
        // console.log('form submit success!')
        // form.resetFields();
        // return <Contact/>;
        // state.succeeded = false;
        // message 
        // function info () {
        //     message.info('Form Submitted Successfully! Thank you for reaching out to me. I will reply to you as soon as I can!')
        // }
        // info();
    // }

    // function handleFinish() {
    //     console.log('yayyyy')
    // }
   
    // function handleFinishFailed (errorInfo) {
    //     console.log('failed', errorInfo);
    // }

    // function openNotification () {
    //     return notification.open({
    //         message:'Form Submitted Successfully!',
    //         description:"Thank you for reaching out to me. I will reply to you as soon as I can!"
    //     })
    // }

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
                        <Button type="submit" htmlType="submit" onClick={openNotification}>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Col>
            
        </>
    )
}


// import React from 'react';
// import { useForm, ValidationError } from '@formspree/react';
// function Contact() {

//   const [state, handleSubmit] = useForm("xoqrdpkb");
//   if (state.succeeded) {
//       console.log('thanks');
//   }

//   return (
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="email">
//         Email Address
//       </label>
//       <input
//         id="email"
//         type="email" 
//         name="email"
//       />
//       <ValidationError 
//         prefix="Email" 
//         field="email"
//         errors={state.errors}
//       />
//       <textarea
//         id="message"
//         name="message"
//       />
//       <ValidationError 
//         prefix="Message" 
//         field="message"
//         errors={state.errors}
//       />
//       <button type="submit" disabled={state.submitting}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default Contact;