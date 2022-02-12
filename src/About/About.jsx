import { Typography, Layout, Row, Col } from "antd";
import "./About.css"

export default function About () {

    const { Title } = Typography

    return (
        <Row className="about-main">
            <Col className="about-main-col">
                <Title className="about-title">
                    Hi, I'm Allen! 
                    <Title className="about-title" level={2}>
                        Software Developer
                    </Title>
                </Title>
            </Col>
        </Row>
    )
}