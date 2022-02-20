import "./Projects.css"
import { Typography, Divider, Card, Avatar, Row, Col, Tag, Button, Image } from "antd";
import { GithubOutlined } from '@ant-design/icons';

export default function Projects () {

    const { Title } = Typography;
    const { Meta } = Card;

    return (
        <>       
            <Title className="project-divider"> Projects</Title>     
            <Row 
            className="projects"
            >
                <Col
                xs={{span:22, offset:1}}
                lg={{span:6}}
                >
                    {/* Cryptohub */}
                    <div
                    style={{
                        width:150,
                        height:300
                    }}
                    className="cryptohub-project"
                    >
                        <div className="crypto-overlay">
                            <h3 className="overlay-title">CryptoHub</h3>
                            <Button href="https://ax-cryptohub.netlify.app/" target="_blank" rel="noreferrer"><p>Project</p></Button>
                            <Button href="https://github.com/allenaxie/Cryptohub" target="_blank" rel="noreferrer"><p>Github</p></Button>
                        </div>
                    </div>
                </Col>
                <Col
                xs={{span:22, offset:1}}
                lg={{span:6}}
                >
                    {/* Before I Fly */}
                    <div
                    style={{
                        width:150,
                        height:300
                    }}
                    className="beforeIFly-project"
                    >
                        <div className="beforeIFly-overlay">
                            <h3 className="overlay-title">Before I Fly</h3>
                            <Button href="https://before-i-fly.herokuapp.com/" target="_blank" rel="noreferrer"><p>Project</p></Button>
                            <Button href="https://github.com/allenaxie/beforeifly" target="_blank" rel="noreferrer"><p>Github</p></Button>
                        </div>
                    </div>
                </Col>
                <Col
                xs={{span:22, offset:1}}
                lg={{span:6}}
                >
                    {/* InvestMint */}
                    <div
                    style={{
                        width:150,
                        height:300
                    }}
                    className="investmint-project"
                    >
                        <div className="investmint-overlay">
                            <h3 className="overlay-title">InvestMint</h3>
                            <Button href="https://invest-mint.herokuapp.com/" target="_blank" rel="noreferrer"><p>Project</p></Button>
                            <Button href="https://github.com/allenaxie/HackBMU-5.0-Team-SEI" target="_blank" rel="noreferrer"><p>Github</p></Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}