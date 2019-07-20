import React,{Component} from 'react'
import {Input, Row, Col, Lov, Select, Tabs, Table} from 'choerodon-ui';
import {observer} from 'mobx-react';
import Store from './stores/Store';

// const TabPane = Tabs.TabPane;
@observer
export default class TabLeft extends Component{

    render(){
        const {TabPane} = this.props
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
        return(
            <TabPane tab={Store.getcreatetitle} key="1">
                <Table defaultExpandAllRows={Store.getzhankaitable} rowSelection={rowSelection} columns={columns} dataSource={Store.getcreateTab}/>
            </TabPane>
        )
    }
}