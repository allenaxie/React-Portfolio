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
            // gutter={[32,32]}
            >
                <Row className="projects-row">
                    {/* 3 in full screen, 1 mobile */}
                    <Col
                    xs={{span:24}}
                    lg={{span:7}}
                    >
                        {/* Cryptohub */}
                    <div
                    style={{
                        width:150,
                        height:300
                    }}
                    className="cryptohub-project"
                    >
                        <div className="cryptohub-overlay">
                            <h3 className="overlay-title">CryptoHub</h3>
                            <Button href="https://ax-cryptohub.netlify.app/" target="_blank" rel="noreferrer"><p>Project</p></Button>
                            <Button href="https://github.com/allenaxie/Cryptohub" target="_blank" rel="noreferrer"><p>Github</p></Button>
                        </div>
                    </div>
                    </Col>
                    <Col
                    xs={{span:24}}
                    lg={{span:7}}
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
                    xs={{span:24}}
                    lg={{span:7}}
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

                <Row className="projects-row">
                    {/* 2 in full screen, 1 mobile */}
                    <Col
                    xs={{span:24}}
                    lg={{span:11}}
                    >
                         {/* Travel Booklet */}
                    <div
                    style={{
                        width:300,
                        height:150,
                    }}
                    className="travelBooklet-project"
                    >
                        <div className="travelBooklet-overlay">
                            <h3 className="overlay-title">Travel Booklet</h3>
                            <Button href="https://travelbooklet.herokuapp.com/" target="_blank" rel="noreferrer"><p>Project</p></Button>
                            <Button href="https://github.com/allenaxie/travel-booklet" target="_blank" rel="noreferrer"><p>Github</p></Button>
                        </div>
                    </div>
                    </Col>

                    <Col
                    xs={{span:24}}
                    lg={{span:11}}
                    >
                        {/* HeroDex */}
                    <div
                    style={{
                        width:290,
                        height:150,
                    }}
                    className="herodex-project"
                    >
                        <div className="herodex-overlay">
                            <h3 className="overlay-title">HeroDex</h3>
                            <Button href="https://herodex.herokuapp.com/" target="_blank" rel="noreferrer"><p>Project</p></Button>
                            <Button href="https://github.com/allenaxie/herodex" target="_blank" rel="noreferrer"><p>Github</p></Button>
                        </div>
                    </div>
                    </Col>
                </Row>
            </Row>
        </>
    )
}