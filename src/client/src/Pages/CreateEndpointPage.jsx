import React, {Component} from 'react';
import {Container} from "reactstrap";

import Api from '../Utilities/Api';

class CreateEndpointPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            endpoint: null
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <Container className="CreateEndpointPage">
                Create endpoint page
            </Container>
        )
    }
}

export default CreateEndpointPage;