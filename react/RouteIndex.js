import React from 'react';
import {Route,Switch} from "react-router-dom";
import { inject } from 'mobx-react';
import {asyncRouter} from '@choerodon/boot';

const RoleIndex =asyncRouter(()=> import('./rightContent/role/index'));

@inject('AppState')
class RouteIndex extends React.Component{
    render(){
        const{match,AppState} = this.props;
        return(
            <Switch>
                <Route path={`${match.url}/role`} component={RoleIndex} />
            </Switch>
        )
    }
}

export default RouteIndex