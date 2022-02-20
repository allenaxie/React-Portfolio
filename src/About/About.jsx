import "./About.css"
import { Typography, Divider, Card, Avatar, Row, Col } from "antd";
import { GithubOutlined, LinkedinOutlined } from '@ant-design/icons';


export default function About () {
    
    const { Title } = Typography;
    const { Meta } = Card;

    return (
        <>
            <Title className="about-divider"> About Me </Title>
            <Col 
            className="about-body"
            xs={{span:24}}
            lg={{span:16, offset:4}}
            >
                <Card
                // cover={
                //     <img
                //       alt="example"
                //       src="https://i.imgur.com/LUR7gwH.jpg"
                //     />
                //   }
                title={<><Avatar src="https://i.imgur.com/LUR7gwH.jpg"/>&nbsp;&nbsp;Full stack software developer</>}
                actions = {[
                    <a className="about-github-container action-btns" href="https://github.com/allenaxie" target="_blank">
                        <GithubOutlined key="Github"/>
                        <span className="action-text">Github</span>
                    </a>,
                    <a className="about-linkedin-container action-btns" href="https://www.linkedin.com/in/allenx/" target="_blank">
                        <LinkedinOutlined key="linkedin"/>
                        <span className="action-text">LinkedIn</span>
                    </a>,
                ]}
                >
                    <Meta
                        description="I am a full-stack developer with a passion in building innovative products to solve complex problems. With my experiences as a personal trainer and a coordinator in social services, I’ve developed strong communication and leadership skills, along with a relentless work ethic. I’ve always been passionate about finding creative solutions to navigate through a problem, which inspired me to pursue software engineering. I am excited to utilize my previous experiences and my passion for problem-solving to foster my growth as a software developer."
                    />

                </Card>
            </Col>
        </>
    )
}