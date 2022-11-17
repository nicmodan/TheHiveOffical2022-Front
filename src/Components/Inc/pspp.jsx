import React from "react"
import "./inc.css"
import { Row, Col, Button } from "react-bootstrap";
import earning from "../../Resources/earning.svg"

const Pspp = ()=>{
    return(
        <Row className="pspp-body">
            <Col className="pspp-contain-info">
                <div className="pdpp-main-info">
                    <h2>Make Money, Easy</h2>
                    <p>You pay for fulfillment only when you make a sale</p>
                    <div className="pdpp-sales-info">
                        <div className="pdpp-sales-info-contain">
                            <div className="pdpp-sales-info-cost">
                                <div className="pdpp-sales-info-cost-row">
                                        <p>You sell a t-shirt</p>
                                        <p>$ 30</p>
                                </div>
                                <div className="pdpp-sales-info-cost-row">                                
                                        <p> You pay for its production</p>
                                        <p>$ 12</p>
                                </div>
                            </div>
                            <div className="pdpp-sales-info-total">
                                <p>Your profit</p>
                                <p>$ 18</p>
                            </div>
                        </div>
                    </div>
                    <Button variant="warning"
                        style={{"margin": "32px 0 24px 0", "fontSize": 20}}>Start selling</Button>
                    <p>
                    100% Free to use · 750+ Products · Largest print network
                    </p>
                </div>
            </Col>
            <Col className="pspp-contain-img">
                <img src={earning} alt="Images of a man and a calculatore" />
            </Col>
        </Row>
    );
}

export default Pspp