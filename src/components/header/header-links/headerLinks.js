import React, {Component} from 'react';
//import {Router, Link} from "react-router-dom";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

class HeaderLinks extends Component {
    render() {
        return (
            <Row className={'mt-2 mb-2 header-links d-none d-sm-block'}>
                <Col className={'text-right'} xs={12}>
                    <a href="#sip" className={'pl-3'}>Siparişlerim</a>
                    <a href="#kart" className={'pl-3'}>Kargo Takip</a>
                    <a href="#hedcek" className={'pl-3'}>Hediye Çeklerim</a>
                    <a href="#nedguv" className={'pl-3'}>Neden Güvenilir?</a>
                    <a href="#sss" className={'pl-3'}>Yardım</a>
                    <a href="#ask" className={'pl-3'}>Bize Sorun</a>
                </Col>
            </Row>
        );
    }
}

export default HeaderLinks;