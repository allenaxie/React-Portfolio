import "./Projects.css"
import { Typography, Divider, Card, Avatar, Row, Col, Tag, Button } from "antd";
import { GithubOutlined } from '@ant-design/icons';

export default function Projects () {

    const { Title } = Typography;
    const { Meta } = Card;

    return (
        <>
            <Title className="project-divider"> Projects</Title>
            <Row>
                <Col>
                    <Card>
                        hey
                    </Card>
                </Col>
            </Row>
        </>
    )
}