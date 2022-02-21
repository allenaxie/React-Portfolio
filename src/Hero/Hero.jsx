import { Typography, Row, Col, Button, Space } from "antd";
import { useNavigate } from "react-router-dom";
import "./Hero.css"

export default function About () {

    const { Title } = Typography
    const navigate = useNavigate();

    return (
        <Row className="about-main">
            <Col className="about-main-col">
                <Row>
                    <Col
                    md={{span:24}}
                    >
                        <Title className="about-title">
                            Hi, I'm Allen! 
                        </Title>
                    </Col>
                    <Col>
                        <Title className="about-subtitle" level={2}>
                            Software Developer
                        </Title>
                    </Col>
                </Row>
                <Row className="btnEmojiQuote-container">
                    <Space >

                        <Col>
                        <form action="#about">
                            <button
                            type="submit"
                            className="hero-btn btn"
                            >
                                Learn More
                            </button>
                        </form>
                        </Col>
                        <Col >
                            <span className="coding-emoji">👨‍💻</span>
                        </Col>
                        <Col>
                            <Title className="hero-quote">
                                <span className="while">while</span> <span>(noSuccess)</span>
                                    <br/>
                                    {"{"}
                                    <br/>
                                    <span className="try">tryAgain();</span>
                                    <br/>
                                    <span className="if">if</span> <span className="dead">(dead)</span>
                                        <br/>
                                        <span className="break">break;</span>
                                        <br/>
                                        <span className="quote-end">
                                            {"}"}
                                        </span>
                            </Title> 
                        </Col>
                    </Space>
                </Row>
            </Col>
        </Row>
    )
}