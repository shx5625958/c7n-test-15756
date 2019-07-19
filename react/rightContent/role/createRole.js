import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Input, Row, Col, Lov, Select} from 'choerodon-ui';
import Store from './stores/Store';
import {Link} from 'react-router-dom'
import './less/role.css';

@observer
export default class CreateRole extends Component {



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
                            <span className={"page-head-title createRoleBefore"}>创建{Store.getcreatetitle}角色</span>
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
                        {/*<Row gutter={10}>*/}
                        {/*    <Col span={14}>*/}
                        {/*        <Select  name="mySex" />*/}
                        {/*    </Col>*/}
                        {/*</Row>*/}
                    </div>
                </div>
            </div>


        );
    }
}