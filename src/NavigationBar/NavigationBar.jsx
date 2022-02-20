import React from 'react';
import "./NavigationBar.css"
import { IdcardOutlined, FolderOpenOutlined, MailOutlined, BranchesOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";
import { Link } from 'react-router-dom';

export default function NavigationBar({ isNavCollapsed, setIsNavCollapsed }) {

    function toggleNav() {
        setIsNavCollapsed(!isNavCollapsed);
    }

    return (
        <Menu
            className="navbar-container"
            theme="dark"
            mode="inline"
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
            <Menu.Item className="menu-items" key="1" icon={<IdcardOutlined />}>
                    <a href="#home">
                        Allen X             
                    </a>
            </Menu.Item>
            <Menu.Item className="menu-items" key="2" icon={<IdcardOutlined />}>
                    <a href="#about">
                        About                
                    </a>
            </Menu.Item>
            <Menu.Item className="menu-items" key="3" icon={ <FolderOpenOutlined /> }>
                <a href="#projects">
                    Projects
                </a>
            </Menu.Item>
            <Menu.Item className="menu-items" key="4" icon={<MailOutlined />}>
                <a href="#contact">
                    Contact
                </a>
            </Menu.Item>
        </Menu>
    )
}