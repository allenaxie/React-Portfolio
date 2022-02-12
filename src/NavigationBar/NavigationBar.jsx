import React from 'react';
import "./NavigationBar.css"
import { IdcardOutlined, FolderOpenOutlined, MailOutlined, BranchesOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";

export default function NavigationBar({ isNavCollapsed, setIsNavCollapsed }) {



    function toggleNav() {
        setIsNavCollapsed(!isNavCollapsed);
    }

    return (
        <Menu
            className="navbar-container"
            theme="dark"
            mode="vertical"
            defaultSelectedKeys={"0"}
        >
            <div className="burger-container">
                <a
                    type="button"
                    onClick={toggleNav}
                    className={isNavCollapsed ? "burger" : "burger burger-active"}
                >
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </a>
            </div>
            <Menu.Item key="1" icon={<IdcardOutlined />}>
                About
            </Menu.Item>
            <Menu.Item key="2" icon={ <FolderOpenOutlined /> }>
                Projects
            </Menu.Item>
            <Menu.Item key="3" icon={ <BranchesOutlined /> }>
                Skills
            </Menu.Item>
            <Menu.Item key="4" icon={<MailOutlined />}>
                Contact
            </Menu.Item>

        </Menu>
    )
}