import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import {Row} from "react-bootstrap";
import Logo from "./logo/logo";
import HeaderLinks from "./header-links/headerLinks";
import SearchBar from "./search-bar/searchBar";
import TopCart from "./top-cart/topCart";
import Container from "react-bootstrap/Container";


class Header extends Component {
    render() {
        return (
            <Col className={"header-cont"}>
                <Col className={"top-bar"}>
                    <Container>
                        <HeaderLinks />
                    </Container>
                </Col>

                <Container className={'mt-4 mb-4'}>
                    <Row>
                        <Logo/>
                        <SearchBar />
                        <TopCart />
                    </Row>
                </Container>
            </Col>
        );
    }
}

export default Header;
