import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row} from "react-bootstrap";
import cards from './cards.png';
class Footer extends Component {
    render() {
        return (
            <footer className={"footer mt-5"}>
                <Container>
                    <Row>
                        <Col md={6} xs={12}>© Tüm hakları saklıdır. Kredi kartı bilgileriniz 256bit SSL sertifikası ile korunmaktadır.</Col>
                        <Col md={{ span: 3, offset: 3 }} xs={12} className={"f-cards"}><img src={cards} alt="Logo" /></Col>
                    </Row>
                </Container>
            </footer>
        );
    }
}

export default Footer;