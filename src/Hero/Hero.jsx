import { Typography, Row, Col, Button } from "antd";
import "./Hero.css"

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
                <button
                className="hero-btn"
                >
                    Learn More
                </button>
            </Col>
        </Row>
    )
}