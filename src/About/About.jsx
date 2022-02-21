import "./About.css"
import { Typography, Divider, Card, Avatar, Row, Col, Tag, Button } from "antd";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useState } from 'react';


export default function About() {

    const { Title } = Typography;
    const { Meta } = Card;

    // Tabs
    const tabList = [
        {
            key: "Description",
            tab: "Description",
        },
        {
            key: "Skills",
            tab: "Skills",
        },
        {
            key: "Hobbies",
            tab: "Hobbies",
        }
    ]
    // Tab content
    const contentList = {
        Description:
            <p>I am a full-stack developer with a passion in building innovative products to solve complex problems. With my experiences as a personal trainer and as a coordinator, I’ve developed strong communication and leadership skills, along with a relentless work ethic. I've always been passionate about finding creative solutions to navigate through a problem, which inspired me to pursue software engineering. I am excited to utilize my previous experiences and my passion for problem-solving to foster my growth as a software developer.</p>,
        Skills:
            <div className="tag-group">
                <Tag color="magenta">HTML5</Tag>
                <Tag color="red">CSS3</Tag>
                <Tag color="volcano">JavaScript</Tag>
                <Tag color="orange">Bootstrap 5</Tag>
                <Tag color="gold">MongoDB</Tag>
                <Tag color="lime">Express</Tag>
                <Tag color="green">React</Tag>
                <Tag color="cyan">Node.js</Tag>
                <Tag color="blue">RESTful API</Tag>
                <Tag color="geekblue">Django</Tag>
                <Tag color="purple">SQL</Tag>       
                <Tag color="magenta">Ant Design</Tag>
                <Tag color="red">Git/Github</Tag>
                <Tag color="orange">Python</Tag>
            </div>,
        Hobbies: 
        <div>
            <Button type="default" className="hobby-btn">🏞 Travel</Button>
            <Button type="default" className="hobby-btn">💵 Finance</Button>
            <Button type="default" className="hobby-btn">🏋️ Exercise</Button>
            <Button type="default" className="hobby-btn">📖 Read</Button>
            <Button type="default" className="hobby-btn">🎮 Video games</Button>
        </div>
        ,
    }

    const [activeTab, setActiveTab] = useState('Description')
    function handleTabChange(key) {
        setActiveTab(key)
    }

    return (
        <>
            <Title className="about-divider"> About Me </Title>
            <Col
                className="about-body"
                xs={{ span: 24 }}
                lg={{ span: 16, offset: 4 }}
            >
                <Card
                    className="about-card"
                    title={<>
                    {/* <Avatar src="https://i.imgur.com/LUR7gwH.jpg" /> */}
                    &nbsp;&nbsp;Full stack software developer</>}
                    actions={[
                        <a className="about-github-container action-btns" href="https://github.com/allenaxie" target="_blank">
                            <GithubOutlined key="Github" />
                            <span className="action-text">Github</span>
                        </a>,
                        <a className="about-linkedin-container action-btns" href="https://www.linkedin.com/in/allenx/" target="_blank">
                            <LinkedinOutlined key="linkedin" />
                            <span className="action-text">LinkedIn</span>
                        </a>,
                    ]}
                    tabList={tabList}
                    onTabChange={(key) => handleTabChange(key)}
                    activeTabKey={activeTab}
                    extra ={
                    <Avatar 
                    src="https://i.imgur.com/LUR7gwH.jpg"
                    size={54} 
                    />
                    }
                >
                    {contentList[activeTab]}

                </Card>
            </Col>
        </>
    )
}