import React, {Component} from 'react';
import {Container} from "reactstrap";

import Api from '../Utilities/Api';

class EndpointPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            endpoint: null,
            responses: [],
            endpointLoaded: false,
            responsesLoaded: false
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <Container className="EndpointPage">
                Endpoint page
            </Container>
        )
    }
}

export default EndpointPage;