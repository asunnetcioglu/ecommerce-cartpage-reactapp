import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import logo from './logo.png';



class Logo extends Component {
    render() {
        return (
            <Col xs={7} sm={3} md={3} className={'brand-logo'}>
                <img src={logo} alt="Logo" />
            </Col>
        );
    }
}

export default Logo;