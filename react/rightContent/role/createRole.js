import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Input, Row, Col, Lov, Select, Tabs, Table} from 'choerodon-ui';
import Store from './stores/Store';
import {Link} from 'react-router-dom'
import './less/role.css';
import {Action} from "@choerodon/boot";

const TabPane = Tabs.TabPane;


@observer
export default class CreateRole extends Component {

    componentWillMount() {
        Store.loadcreateTab()
        Store.loadSubMenusData()
    }

    callback(key) {
        console.log(key);
    }

    render() {
        const columns = [{
            title: '菜单',
            dataIndex: 'name',
            key: 'name',
            width: '20%',
            render: (text, record) => {
                return <span><i className={`icon icon-${record.icon}`}></i>{record.name}</span>
            }
        }, {
            title: '页面入口',
            dataIndex: 'route',
            key: 'route',
            width: '32%'

        },
            {
                title: '',
                key: 'action',
                align: 'right',
                render: (text, record) => {
                    return <button className={"c7n-btn c7n-btn-circle c7n-btn-sm c7n-btn-icon-only c7n-btn-flat"}>
                        <i className={"icon icon-predefine"}></i>
                    </button>;
                },
            }
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            onSelect: (record, selected, selectedRows) => {
                console.log(record, selected, selectedRows);
            },
            onSelectAll: (selected, selectedRows, changeRows) => {
                console.log(selected, selectedRows, changeRows);
            },
        };
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
                                <Input placeholder="角色编码*" required label="Basic" copy/>
                            </Col>
                            <Col span={7}>
                                <Input placeholder="角色名称*" required label="Basic"/>
                            </Col>
                        </Row>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab={Store.getcreatetitle} key="1">
                                <Table rowSelection={rowSelection} columns={columns} dataSource={Store.getcreateTab}/>
                            </TabPane>
                            {
                                Store.getcreatetitle == "全局层" ?
                                    <TabPane tab="个人中心" key="2">
                                        <Table rowSelection={rowSelection} columns={columns} dataSource={Store.getcreateSubMenusdata}/>
                                    </TabPane> : ''
                            }

                        </Tabs>
                    </div>
                </div>
            </div>


        );
    }
}