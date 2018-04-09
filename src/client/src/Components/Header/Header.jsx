import React from 'react';
import {Link} from 'react-router-dom';
import {
    Container,
    Navbar,
    NavbarBrand,
    Nav,
    NavItem
} from 'reactstrap';

const Header = () => (
    <Container>
        <div className="Header">
            <Navbar light color="faded">
                <NavbarBrand href="/">
                    <strong>Loki</strong>
                </NavbarBrand>
                <Nav className="ml-auto">
                    <NavItem>
                        <Link className="nav-link" to="/endpoints">Endpoints</Link>
                    </NavItem>
                </Nav>
            </Navbar>
        </div>
    </Container>
);

export default Header;