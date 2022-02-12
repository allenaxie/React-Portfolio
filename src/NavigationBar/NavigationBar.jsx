import React from 'react';
import "./NavigationBar.css"
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { Menu, Button } from "antd";

export default function NavigationBar({ isNavCollapsed, setIsNavCollapsed }) {



    function toggleNav() {
        setIsNavCollapsed(!isNavCollapsed);
    }

    return (
        <Menu
            className="navbar-container"
            theme="dark"
            mode="inline"
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

        </Menu>
    )
}