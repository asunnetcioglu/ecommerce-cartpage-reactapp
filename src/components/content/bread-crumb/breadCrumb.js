import React, {Component} from 'react';
import Container from "react-bootstrap/Container";

class BreadCrumb extends Component {
    render() {
        return (
            <Container>
                <div className={"bread-crumb-cont mt-4 m-b5"}>
                    <a href="#hp">Ana Sayfa</a> > <a href="#hp">Sepetim</a>
                </div>
            </Container>
        );
    }
}

export default BreadCrumb;