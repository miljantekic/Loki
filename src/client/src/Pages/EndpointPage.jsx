import React, {Component} from 'react';
import {Container} from "reactstrap";

import Api from '../Utilities/Api';

class EndpointPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            endpointId: props.match.params.id,
            endpoint: null,
            responses: [],
            endpointLoaded: false,
            responsesLoaded: false
        }
    }
    componentDidMount() {
        Api.get('/endpoint/' + this.state.endpointId).then(response => {
            if (response.ok) {
                this.setState({
                    endpointLoaded: true,
                    endpoint: response.endpoint,
                });
            }
        })
    }
    render() {
        let {endpointLoaded, endpoint} = this.state;

        return (
            <Container className="EndpointPage">
                {endpointLoaded
                    ? <div>
                        {endpoint.url}
                    </div>
                    : <div>
                        Loading
                    </div>
                }
            </Container>
        )
    }
}

export default EndpointPage;