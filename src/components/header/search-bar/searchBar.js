import React, { Component } from 'react';
import {Col, InputGroup, FormControl, Button} from "react-bootstrap";
import {faSearch} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class SearchBar extends Component {
    render() {
        return (
            <Col xs={12} md={6}>
                <Col className={'mt-3 search-bar d-none'}>
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Search..."
                            aria-label="Search..."
                            aria-describedby="basic-addon2"
                        />
                        <InputGroup.Append>
                            <Button variant="warning"><FontAwesomeIcon icon={faSearch} /></Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Col>
        );
    }
}

export default SearchBar;