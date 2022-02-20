import "./Contact.css"
import { Typography, Divider, Card, Avatar, Row, Col, Tag, Button, Form, Input } from "antd";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';


export default function Contact () {
    const { Title } = Typography;
    const { Meta } = Card;

    function handleFinish (values) {
        console.log('success',values)
        // FormInstance.resetFields();
    }

    function handleFinishFailed (errorInfo) {
        console.log('failed', errorInfo);
    }

    return (
        <>
            <Title className="contact-divider"> Contact Me</Title>
            <Form
            name="contact-form"
            labelCol={{span:8}}
            wrapperCol={{span:16}}
            initialValues={{remember:true}}
            onFinish={handleFinish}
            onFinishFailed={handleFinishFailed}
            autocomplete="off"
            // requiredMark={false}
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
        </>
    )
}