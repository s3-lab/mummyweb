import React from "react";
import { Card, Col, Row } from 'antd';
import Mummyplanter from "../../assets/product/mummyplanter.jpg";


import "./Product.scss"

const { Meta } = Card;


export default function Product() {
   
    return (
    <div className="Newproducts">
        <div className="tittle-newproducts">
            <h2>NUEVOS PRODUCTOS</h2>
        </div>
        <div className="site-card-wrapper">
            <Row gutter={16}>
                            <Col span={6.5}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={Mummyplanter} />}
                                >
                                <Meta title="AR 650" description="Edificio montserrat" />
                            </Card>
                            </Col>
                            <Col span={6.5}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={Mummyplanter} />}
                                >
                                <Meta title="AR 650" description="Edificio montserrat" />
                            </Card>
                            </Col>
                            <Col span={6.5}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={Mummyplanter} />}
                                >
                                <Meta title="AR 650" description="Edificio montserrat" />
                            </Card>
                            </Col>
                            <Col span={6.5}>
                                <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={Mummyplanter} />}
                                >
                                <Meta title="AR 650" description="Edificio montserrat" />
                            </Card>
                            </Col>
            </Row>
          </div>
        </div>
    );
}