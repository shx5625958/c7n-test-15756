import React, {Component} from 'react';
import {observer} from 'mobx-react';
import {Button, Icon, Menu, Table, Dropdown} from 'choerodon-ui';
import {Action, Content, Header, Page} from '@choerodon/boot';
import Store from './stores/Store';
import {Link} from 'react-router-dom'
import './less/role.css';
// import {axios}  from '@choerodon/boot'
@observer
export default class Role extends Component {


    componentDidMount() {
        this.loadData();
    }

    loadData = () => {
        Store.loadData();
        // Store.loadLevelData("project");
    }



    renderLevel(text) {
        const LEVEL_MAP = {
            organization: '组织',
            project: '项目',
        };
        return LEVEL_MAP[text] || '全局';
    }

    renderModified(text) {
        // icon icon-av_timer
        // icon icon-settings
        const MODIFIED = {
            true: <span className={"c7n-iam-status-tag-with-icon"}><i className={"icon icon-av_timer"}></i><span
                className={"enabletitle"}>自定义</span></span>,
            false: <span className={"c7n-iam-status-tag-with-icon"}><i className={"icon icon-settings"}></i><span
                className={"enabletitle"}>预定义</span></span>,
        };
        return MODIFIED[text] || '预定义'
    }

    renderTable = () => {
        const {isLoading, pagination} = Store;
        const columns = [
            {
                title: '角色名称',
                dataIndex: 'name',
                key: 'name',
                width: '25%',
                filters:[]
            },
            {
                title: '角色编码',
                dataIndex: 'code',
                key: 'code',
                width: '25%',
                filters:[],
            },
            {
                title: '角色层级',
                dataIndex: 'level',
                key: 'level',
                width: '15%',
                filters: [
                    {
                        text: '全局',
                        value: 'site',
                    }, {
                        text: '组织',
                        value: 'organization',
                    }, {
                        text: '项目',
                        value: 'project',
                    }],
                onFilter: (value, record) => record.level.toString().indexOf(value) === 0,
                sorter: (a, b) => a.level.length - b.level.length,
                render: value => this.renderLevel(value),
            },
            {
                title: '角色来源',
                dataIndex: 'modified',
                key: 'modified',
                filters: [
                    {
                        text: '自定义',
                        value: 'true'
                    },
                    {
                        text: '预定义',
                        value: 'false'
                    }
                ],
                // icon icon-av_timer
                onFilter: (value, record) => record.modified.toString().indexOf(value) === 0,
                sorter: (a, b) => a.level.modified - b.modified.length,
                render: text => this.renderModified(text)
            },
            {
                title: '角色状态',
                dataIndex: 'enabled',
                key: 'enabled',
                // rnder:(text)=>{
                //
                // }
                render: (text, record) => {
                    if (record.enabled === true) {
                        return <span className={"c7n-iam-status-tag-with-icon"} style={{color: "rgb(0, 191, 165)"}}><i
                            className={"icon icon-check_circle"}></i><span className={"enabletitle"}>启用</span></span>
                    } else {
                        return <span className={"c7n-iam-status-tag-with-icon"} style={{color: "red"}}><i
                            className={"icon icon-remove_circle"}></i><span className={"enabletitle"}>停用</span></span>
                    }
                }
            },
            {
                title: '',
                key: 'action',
                align: 'right',
                render: (text, record) => {
                    const actionDatas = [{
                        icon: '',
                        type: 'site',
                        text: '修改',
                        // action: this.showModal.bind(this, record.id),
                    }];
                    if (record.enabled) {
                        actionDatas.push({
                            icon: '',
                            type: 'site',
                            text: '停用',
                            // action: this.handleEnable.bind(this, record),
                        });
                    } else {
                        actionDatas.push({
                            icon: '',
                            type: 'site',
                            text: '启用',
                            // action: this.handleEnable.bind(this, record),
                        });
                    }
                    return <Action data={actionDatas}
                                   getPopupContainer={() => document.getElementsByClassName('page-content')[0]}/>;
                },
            },
        ];
        const rowSelection = {
            onChange: (selectedRowKeys, selectedRows) => {
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
            },
            getCheckboxProps: record => ({
                disabled: record.name === 'Disabled User', // Column configuration not to be checked
                name: record.name,
            }),
            selections: true,
        };

        return (
            <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={Store.data.slice()}
                pagination={pagination}
                rowKey={record => record.id}
                onChange={this.handlePageChange}
                loading={isLoading}
                filterBarPlaceholder="过滤表"
            />
        );
    }
     onClick = function ({ key }) {
        if(key==1){
            Store.loadLevelData("site");
        }else if(key==2){
            Store.loadLevelData("organization");
        }else if(key==3){
            Store.loadLevelData("project");
        }
    };
    render() {

        const menu = (
            <Menu onClick={this.onClick}>
                <Menu.Item key="1">全局</Menu.Item>
                <Menu.Item key="2">组织</Menu.Item>
                <Menu.Item key="3">项目</Menu.Item>
            </Menu>
        );
        return (
            <div className={"App"}>
                <Page className="choerodon-role">
                    <Header title="角色管理">
                        <Dropdown overlay={menu} trigger={['click']} placement={'bottomCenter'}>
                            <Button>
                                全局<Icon type="arrow_drop_down" />
                            </Button>
                        </Dropdown>
                        {/*<button type={"button"} className={"c7n-btn c7n-btn-flat"}>*/}
                            <i className={"icon icon-playlist_add"}></i>
                            <Link to={"/demo/role/create"} replace><span>创建角色</span></Link>
                        {/*</button>*/}
                        <button disabled type={"button"} className={"c7n-btn c7n-btn-flat"}>
                            <i className={"icon icon-content_copy"}></i>
                            <span>基于所选角色创建</span>
                        </button>
                        <Button
                            onClick={this.handleRefresh}
                            icon="refresh"
                        >
                            刷新
                        </Button>
                    </Header>
                    <Content
                        title={"平台\"Choerodon\"的角色管理"}
                        description="角色是您可分配给成员的一组权限。您可以创建角色并为其添加权限，也可以复制现有角色并调整其权限。"
                        link="#"
                    >
                        {this.renderTable()}
                    </Content>
                </Page>
            </div>
        );
    }
}