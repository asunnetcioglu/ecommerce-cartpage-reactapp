import React, {Component} from 'react';
import Container from "react-bootstrap/Container";
import {Col, Row, Form} from "react-bootstrap";
import BreadCrumb from "./bread-crumb/breadCrumb.js";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faInfoCircle} from "@fortawesome/free-solid-svg-icons";
import {faTruck} from "@fortawesome/free-solid-svg-icons";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
class Content extends Component {
    render() {
        return (
            <main role={"main"}>
                <BreadCrumb/>
                <Container className={"cart-page-cont"}>
                    <Row className={"mt-5"}> {/*For real projects this areas must be different component*/}
                        <Col xs={12} md={9}>
                            <h1>Sepetim (2 Ürün)</h1>
                            <span className={"cart-info-message"}><FontAwesomeIcon icon={faInfoCircle} /> Sepetinizde olan Vestel 32HB5000 ürünü sebebiyle yapabileceğiniz <strong>maksimum taksit sayısı 6</strong> olacaktır.</span>

                            <div className={"cart-items"}>
                                <div className={"item box"}>
                                    <div className={"row mt-3"}>
                                        <div className={"col-md-2 col-12"}>
                                            <div className={"pr-img"}>
                                                <img src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTxe8XxbReMPxu1PTNA7jjyGUHnGocrT245WhcRvkalkdM9Re2vvg&usqp=CAc" width={100} height={100} alt=""/>
                                            </div>
                                        </div>
                                        <div className={"col-md-5 col-12 pr-infos"}>
                                            <strong>Vestel</strong>
                                            <div className={"pr-name-cont"}>
                                                <a href="#vesteltv">Vestel 32HB5000 32" 82 Ekran HD Uydu Alıcılı LED TV + Uydu Alıcı Hediye</a>
                                            </div>
                                            <span><FontAwesomeIcon icon={faTruck} /> Bugün Kargoda</span>
                                        </div>
                                        <div className={"col-md-2 col-12 qty-select"}>
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Control as="select">
                                                        <option>1 Adet</option>
                                                        <option>2 Adet</option>
                                                        <option>3 Adet</option>
                                                        <option>4 Adet</option>
                                                        <option>5 Adet</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className={"col-md-3 col-12 pr-prices"}>
                                            <span className={"old-price"}>1.299.00 TL</span>
                                            <span className={"price"}>3,999.00 TL</span>
                                            <a href="#delete" className={"delete-pr"}><FontAwesomeIcon icon={faTrash} /> Ürünü Sil</a>
                                        </div>
                                    </div>


                                </div>

                                <div className={"item box"}>
                                    <div className={"row mt-3"}>
                                        <div className={"col-md-2 col-12"}>
                                            <div className={"pr-img"}>
                                                <img src="https://st2.myideasoft.com/idea/ex/95/myassets/products/032/apple-lightning-iphone-ipod-ipad-sarj-ve-senkronizas-21315-4.jpg?revision=1570034047" width={100} height={100} alt=""/>
                                            </div>
                                        </div>
                                        <div className={"col-md-5 col-12 pr-infos"}>
                                            <strong>Apple</strong>
                                            <div className={"pr-name-cont"}>
                                                <a href="#vesteltv">Lightning Kablo</a>
                                            </div>
                                            <span><FontAwesomeIcon icon={faTruck} /> Bugün Kargoda</span>
                                        </div>
                                        <div className={"col-md-2 col-12 qty-select"}>
                                            <Form>
                                                <Form.Group controlId="exampleForm.ControlSelect1">
                                                    <Form.Control as="select">
                                                        <option>1 Adet</option>
                                                        <option>2 Adet</option>
                                                        <option>3 Adet</option>
                                                        <option>4 Adet</option>
                                                        <option>5 Adet</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Form>
                                        </div>
                                        <div className={"col-md-3 col-12 pr-prices"}>
                                            <span className={"old-price"}>83.90 TL</span>
                                            <span className={"price"}>65.95 TL</span>
                                            <a href="#delete" className={"delete-pr"}><FontAwesomeIcon icon={faTrash} /> Ürünü Sil</a>
                                        </div>
                                    </div>


                                </div>

                            </div>
                        </Col>
                        <Col xs={12} md={3} className={"order-summary"}>
                            <div className={"order-total box"}>
                                <h2>Sipariş Özeti</h2>
                                <div className={"row"}>
                                    <div className={"col-md-6 col-xs-12"}><span><strong>Ürün Toplamı :</strong></span></div> <div className={"col-md-6 col-xs-12 sub-total"}><span>4,250,00 TL</span></div>
                                </div>
                                <div className={"row"}>
                                    <div className={"col-md-7 col-xs-12"}><span><strong>Kargo Toplam :</strong></span></div> <div className={"col-md-5 col-xs-12 shp-lbl"}><span><em>Ücretsiz</em></span></div>
                                </div>
                                <div className={"row terms-box"}>
                                    <label className="container-i"><em>Ön Bilgilendirme Koşulları'nı</em> ve <em>Mesafeli Satış Sözleşmesi'ni</em> okudum, onaylıyorum.
                                        <input type="checkbox" />
                                        <span className="checkmark"></span>
                                    </label>
                                </div>
                                <div className={"total-price"}>
                                    <div className={"row"}>
                                        <div className={"col-md-2 top-text"}>Toplam</div> <div className={"col-md-10 price-text"}>4,250.00 TL</div>
                                    </div>
                                </div>
                            </div>
                            <a href="#btn" className={"btn btn-block"}>Alışverişi Tamamla</a>
                        </Col>
                    </Row>
                </Container>

            </main>
        );
    }
}

export default Content;