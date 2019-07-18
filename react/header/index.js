import React from 'react'
import './less/header.css'
import {Menu, Dropdown, Icon, Button} from 'choerodon-ui/pro';

export default class Header extends React.Component {
    state = {
        hidden: true,
        disabled: true,
    };

    handleMenuClick = (e) => {
        if (e.key === '3') {
            this.setState({hidden: true});
        }
        if (e.key === '1') {
            this.setState({disabled: false});
        }
    }

    handlebars() {
        console.log()
    }

    handleToggleDropdown = () => {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <div className={"c7n-boot-header-user-popover-content"}>
                    <div className={"c7n-boot-header-user-avatar"}></div>
                </div>
                <div className={"c7n-boot-header-user-popover-title"}>
                    <span>管理员</span>
                    <span>1458598648@qq.com</span>
                </div>
                <Menu.Item key="1">
                    <i className={"icon icon-message_notification"}></i>
                    "消息通知"
                </Menu.Item>
                <Menu.Item key="1">
                    <i className={"icon icon-person"}></i>
                    "个人信息"
                </Menu.Item>
                <Menu.Item key="1">
                    <i className={"icon icon-vpn_key"}></i>
                    "修改密码"
                </Menu.Item>
                <Menu.Item key="1">
                    <i className={"icon icon-authority"}></i>
                    "权限信息"
                </Menu.Item>
                <Menu.Item key="1">
                    <i className={"icon icon-token"}></i>
                    "授权管理"
                </Menu.Item>
                <Menu.Item key="1">
                    <i className={"icon icon-settings"}></i>
                    "平台管理"
                </Menu.Item>
                <Menu.Item key="1">
                    <i className={"icon icon-exit_to_app"}></i>
                    "退出登录"
                </Menu.Item>
            </Menu>
        );
        return (

            <div className={"c7n-boot-header-wrap header"}>
                <div className={"c7n-boot-header-left header-left "}>
                    <div className={"c7n-boot-header-logo-wrap "}>
                        <div className={"c7n-boot-header-logo-icon c7n-boot-header-logo-default-icon "}></div>
                    </div>
                    <a className={"c7n-boot-header-logo header-left-logo-font"}>Choerodon</a>
                </div>
                <div className={"header-center-1"}>
                    <ul className={"c7n-boot-header-center "}>
                        <li>
                            <button type={"button"} className={"c7n-btn block c7n-btn-flat"}>
                                <i className={"icon icon-sync_user manager-icon header-left-i"}></i>
                                <span>协作连接</span>
                                <div className={"c7n-ripple-wrapper"}></div>
                            </button>
                            <button type={"button"} className={"c7n-btn block c7n-btn-flat"}>
                                <i className={"icon icon-project_line  manager-icon header-left-i"}></i>
                                <span>项目</span>
                                <div className={"c7n-ripple-wrapper"}></div>
                            </button>
                            <button type={"button"} className={"c7n-btn block c7n-btn-flat"}>
                                <i className={"icon icon-appmarket  manager-icon header-left-i"}></i>
                                <span>应用市场</span>
                                <div className={"c7n-ripple-wrapper"}></div>
                            </button>
                            <button type={"button"} className={"c7n-btn block c7n-btn-flat"}>
                                <i className={"icon icon-book  manager-icon header-left-i"}></i>
                                <span>知识</span>
                                <div className={"c7n-ripple-wrapper"}></div>
                            </button>
                        </li>
                    </ul>
                </div>
                <div className={"header-right-1"}>
                    <ul className={"c7n-boot-header-right"}>
                        <li style={{width: "200px"}}>
                            <button type={"button"}
                                    className={"c7n-btn c7n-boot-header-menu-type-button block org-button c7n-dropdown-trigger c7n-btn-flat header-right-button header-right-b"}>
                                <div>
                                    <span>请选择组织</span>
                                    <i className={"icon icon-arrow_drop_down"}></i>
                                </div>
                                <div className={"c7n-ripple-wrapper"}></div>
                            </button>
                        </li>
                        <li style={{width: "200px"}}>
                            <button type="primary"
                                    className={"c7n-btn block c7n-btn-flat header-right-bt"}>
                                <div>
                                    <span>管理中心</span>
                                    <i className={"icon icon-arrow_drop_down"}></i>
                                </div>
                                <div className={"c7n-ripple-wrapper"}></div>
                            </button>
                        </li>
                        <li>
                            <Dropdown
                                overlay={menu}
                                hidden={this.state.hidden}
                            >
                                <div className={"c7n-boot-header-user-avatar c7n-popover-open"}
                                     onClick={this.handleToggleDropdown} onBlur={this.handlebars.bind(this)}>

                                </div>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}