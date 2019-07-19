import React from 'react'
import './less/header.css'
import {Menu, Dropdown, Icon, Button} from 'choerodon-ui/pro';
import Store from './stores/Store'

export default class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hidden: true,
            disabled: true,
        };
    }

    componentDidMount() {
        this.loadData()
    }

    loadData() {
        Store.loadPersonalData()
        Store.loadSubMenusData()
    }

    handleMenuClick = (e) => {
        if (e.key === '3') {
            this.setState({hidden: true});
        }
        if (e.key === '1') {
            this.setState({disabled: false});
        }
    }


    handleToggleDropdown = () => {
        this.setState({hidden: !this.state.hidden});
    }

    render() {
        const menu = (
            <Menu onClick={this.handleMenuClick}>
                <div className={"c7n-boot-header-user-popover-content header-right-menu1"}>
                    <div className={"c7n-boot-header-user-avatar header-touxiang"} ></div>
                </div>
                <div className={"c7n-boot-header-user-popover-title header-right-title1"}>
                    <span>{Store.personaldata.realName}</span>
                    <span>{Store.personaldata.email}</span>
                </div>
                {
                    Store.subMenusdata.map(el => {
                            return (
                                <Menu.Item key={el.id}>
                                    <i className={`icon ${"icon-"+el.icon}`}></i>
                                    {el.name}
                                </Menu.Item>
                            )
                        }
                    )
                }
                <Menu.Item key="6">
                    <i className={"icon icon-settings"}></i>
                    "平台管理"
                </Menu.Item>
                <Menu.Item key="7">
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
                                trigger={['click']}
                                overlay={menu}
                                hidden={this.state.hidden ? true : false}
                            >
                                <div className={"c7n-boot-header-user-avatar c7n-popover-open header-touxiang"}
                                     onClick={this.handleToggleDropdown}>

                                </div>
                            </Dropdown>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}