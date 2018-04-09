import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';

import EndpointsPage from '../Pages/EndpointsPage';
import CreateEndpointPage from '../Pages/CreateEndpointPage';
import EndpointPage from '../Pages/EndpointPage';

class RoutedContent extends Component {
    render() {
        return (
            <div>
                <Route path="/endpoints" component={EndpointsPage}/>
                <Switch>
                    <Route path="/endpoint/create" exact component={CreateEndpointPage}/>
                    <Route path="/endpoint/:id" exact component={EndpointPage}/>
                </Switch>
            </div>
        )
    }
}

export default RoutedContent;