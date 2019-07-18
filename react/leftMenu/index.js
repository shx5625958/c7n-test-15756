import React, {Component, Fragment} from 'react'
import {
    Link,
} from "react-router-dom"
import {Menu, Icon, Button} from "choerodon-ui";
import './less/leftMenu.css'
import MenuItem from "choerodon-ui/es/menu/MenuItem";

export default class LeftMenu extends React.Component {
    state = {
        collapsed: false
    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div className={"leftMenu"}  >
            <div>
                <Button type="primary" onClick={this.toggleCollapsed} style={{marginBottom: 12}}>
                    <Icon style={{fontSize: 22}} type="format_list_bulleted"/>
                </Button>
                <Menu
                    defaultSelectedKeys={['1']}
                    defaultOpenKeys={['sub1']}
                    mode="inline"
                    inlineCollapsed={this.state.collapsed}
                >
                    <Menu.Item key="0">
                        <Icon/>
                        <span className="menutitle">消息中心</span>
                    </Menu.Item>
                    <Menu.Item key="1">
                        <Icon type="pie_chart_outlined"/>
                        <span><Link to="/demo/role">角色管理</Link></span>
                    </Menu.Item>
                </Menu>
            </div>
            </div>
        )
    }
}