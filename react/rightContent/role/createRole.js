import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Input, Row, Col, Lov, Select,Tabs } from 'choerodon-ui';
import Store from './stores/Store';
import {Link} from 'react-router-dom'
import './less/role.css';
const TabPane = Tabs.TabPane;

@observer
export default class CreateRole extends Component {

    componentWillMount() {
        Store.loadcreateTab()
    }
    callback(key) {
        console.log(key);
    }
    render() {
        return (
            <div className={"App"}>
                <div className={"page-container c7n-roleMsg choerodon-role"}>
                    <div className={"page-head"}>
                        <div>
                            <Link to="/demo/role">
                                <button
                                    type={"button"}
                                    className={"c7n-btn back-btn small-tooltip c7n-btn-primary c7n-btn-circle c7n-btn-lg c7n-btn-icon-only c7n-btn-flat "}
                                >

                                    <i className={"icon icon-arrow_back"}
                                    >
                                    </i>
                                </button>
                            </Link>
                            <span className={"page-head-title createRoleBefore"}>创建角色</span>
                        </div>
                    </div>
                    <div className={"page-content"}>
                        <Row gutter={8}>
                            <Col span={7}>
                                <Input placeholder="角色编码*"  required label="Basic" copy />
                            </Col>
                            <Col span={7}>
                                <Input placeholder="角色名称*"  required label="Basic"  />
                            </Col>
                        </Row>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab={Store.getcreatetitle} key="1">这是{Store.getcreatetitle}的菜单</TabPane>
                            {
                                Store.getcreatetitle=="全局层"?
                                <TabPane  tab="个人中心" key="2">这是个人中心的菜单</TabPane>:''
                            }

                        </Tabs>
                    </div>
                </div>
            </div>


        );
    }
}