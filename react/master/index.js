import React, {Component,Fragment} from 'react';

import Header from '../header'
import LeftMenu from '../leftMenu'
import './less/master.css'
export default class Master extends Component {
    render() {
        const {AutoRouter} = this.props;
        return (
            <Fragment>
                <Header/>
                <LeftMenu/>
                <div>
                <AutoRouter/>
                </div>
            </Fragment>
        )
    }
}