import React, {PureComponent} from 'react';
import './less/welcome.css';

export default class Role extends PureComponent {

    render() {
        return (
            <div className={"App"}>
                欢迎来到管理界面,点击左边角色管理开始正式进入我的作业
            </div>
        );
    }
}