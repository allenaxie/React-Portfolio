import { Typography, Row, Col, Button } from "antd";
import "./Hero.css"

export default function About () {

    const { Title } = Typography

    return (
        <Row className="about-main">
            <Col className="about-main-col">
                <Title className="about-title">
                    Hi, I'm Allen! 
                    <Title className="about-subtitle" level={2}>
                        Software Developer
                    </Title>
                </Title>
                <button
                className="hero-btn btn"
                >
                    Learn More
                </button>
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
                            {"}"}
                </Title>
            </Col>
        </Row>
    )
}