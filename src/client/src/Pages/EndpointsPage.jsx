import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import { Container, ListGroup, ListGroupItem, Badge, Row, Col } from 'reactstrap';

class EndpointsPage extends Component {
    render() {
        return (
            <Container className="EndpointsPage">
                <ListGroup>
                    <Link to="/endpoint/1" className="list-group-item-action list-group-item">
                        <Row>
                            <Col xs={2} md={1}>
                                <Badge color="info">GET</Badge>
                            </Col>
                            <Col>
                                <strong>/gtmetrix</strong>
                            </Col>
                        </Row>
                    </Link>
                    <Link to="/endpoint/2" className="list-group-item-action list-group-item">
                        <Row>
                            <Col xs={2} md={1}>
                                <Badge color="success">POST</Badge>
                            </Col>
                            <Col>
                                <strong>/sucuri/scan</strong>
                            </Col>
                        </Row>
                    </Link>
                    <Link to="/endpoint/3" className="list-group-item-action list-group-item">
                        <Row>
                            <Col xs={2} md={1}>
                                <Badge color="info">GET</Badge>
                            </Col>
                            <Col>
                                <strong>/uptime-monitor</strong>
                            </Col>
                        </Row>
                    </Link>
                </ListGroup>
            </Container>
        )
    }
}

export default EndpointsPage;