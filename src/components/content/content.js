import React, {Component} from 'react';
//import Container from "react-bootstrap/Container";
import {Col} from "react-bootstrap";
import BreadCrumb from "./bread-crumb/breadCrumb.js";

class Content extends Component {
    render() {
        return (
            <Col>
                <BreadCrumb/>
            </Col>
        );
    }
}

export default Content;