import React, {Component} from 'react';
import {Route} from 'react-router-dom';

import EndpointsPage from '../Pages/EndpointsPage';

class RoutedContent extends Component {
    render() {
        return (
            <Route path="/endpoints" component={EndpointsPage}/>
        )
    }
}

export default RoutedContent;