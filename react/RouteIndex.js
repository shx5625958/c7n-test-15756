import React from 'react';
import {Route,Switch} from "react-router-dom";
import { inject } from 'mobx-react';
import {asyncRouter} from '@choerodon/boot';

const RoleIndex  =  asyncRouter(()=> import('./rightContent/role/index'));
const CreateRole = asyncRouter(()=> import('./rightContent/role/createRole.js'))
@inject('AppState')
class RouteIndex extends React.Component{
    render(){
        const{match,AppState} = this.props;
        return(
            <Switch>
                <Route exact  path={`${match.url}/role`} component={RoleIndex} />
                <Route exact  path={`${match.url}/role/create`} component={CreateRole}/>
            </Switch>
        )
    }
}

export default RouteIndex