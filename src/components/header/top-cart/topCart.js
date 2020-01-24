import React, {Component} from 'react';
import {Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';



class TopCart extends Component {
    render() {
        return (
            <Col md={3} sm={3}>
                <Col className={'text-right m-cart d-none'}>
                    <a href="#cart"><FontAwesomeIcon icon={faShoppingCart} className={'cart-icon'} /> <span>Cart</span></a>
                </Col>
                <Col className={'text-right m-cart'}>
                    <a href="#contshp" className={'btn cont-shp'}>Alışverişe Devam Et</a>
                </Col>

            </Col>
        );
    }
}

export default TopCart;