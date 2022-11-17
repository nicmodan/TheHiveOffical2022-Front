import React from "react"
import "./inc.css"
import { Row, Col, Form, FormCheck} from "react-bootstrap"
import Button from "./button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const PricingPlan = () =>{
    return(
        <>
            <div className="pricing-plan-toggle-botton pricing-header">
                <span>
                    <b>
                        Pay monthly 
                    </b>
                </span>
                <Form.Check 
                    type="switch"
                    id="custom-switch"
                    style={{marginLeft: 10}}
                    // color="yellow"
                />
                <span>
                    <b>
                        Pay yearly
                    </b>
                </span>
            </div>
            <div className="prcing-plan">
                <Row>
                    <Col sm={4}>
                        <div className="prcing-plan-contain">
                            <h1>
                                Free
                            </h1>
                            <p>
                                For merchants starting a business.
                            </p>
                            <h5>
                                USD 0/ MONTH
                            </h5>
                            <ul className="prcing-plan-contain-list">
                                <li>
                                    <b>5</b> stores per account
                                </li>
                                <li>
                                    <b>Unlimited</b> product designs
                                </li>
                            </ul>
                            <Button value="Get Started" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="prcing-plan-contain">
                            <h1>
                                Premium
                            </h1>
                            <p>
                                For merchants with growing sales.
                            </p>
                            <h5>
                                USD 29/ MONTH 
                            </h5>
                            <ul className="prcing-plan-contain-list">
                                <li>
                                    Billed annually
                                </li>
                                <li>
                                    <b>10</b> stores per account
                                </li>
                                <li>
                                    <b>Unlimited</b> product designs
                                </li>
                                <li>
                                    Up to <b>20%</b> discount on all product
                                </li>
                            </ul>
                            <Button value="Get Premium" />
                        </div>
                    </Col>
                    <Col sm={4}>
                        <div className="prcing-plan-contain">
                            <h1>
                                Enterprise
                            </h1>
                            <p>
                                For merchants with 10,000+ orders a day
                            </p>
                            <h5>
                                Custom pricing
                            </h5>
                            <ul className="prcing-plan-contain-list">
                                <li>
                                   <b>Unlimited</b> stores per account
                                </li>
                                <li>
                                    <b>Unlimited</b> product designs
                                </li>
                                <li>
                                    Up to <b>20%</b> discount on all products
                                </li>
                            </ul>
                            <Button value="Contact us" />
                        </div>
                    </Col>
                </Row>
                <div style={{
                    textAlign: "center",
                    margin: 40
                }}>
                    
                    <p>
                        <strong>
                            Main features for each plan
                        </strong>   
                    </p>
                </div>
                <Row className="prcing-plan-contain-more-info">
                    <Col sm={4}>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Mockup generator
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Integrity with printing beaches
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Manual order creation
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> 24/7 merchant support
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Self-serve help centre
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Custom order import
                            </li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Mockup generator
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Integrity with printing beaches
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Manual order creation
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> 24/7 merchant support
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Self-serve help centre
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Custom order import
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} />  Up to 20% discount on all products
                            </li>
                        </ul>
                    </Col>
                    <Col sm={4}>
                        <ul>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Mockup generator
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Integrity with printing beaches
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Manual order creation
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> 24/7 merchant support
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Self-serve help centre
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Custom order import
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Up to 20% discount on all products
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Early Access to new features
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> Dedicated account manager
                            </li>
                            <li>
                                <FontAwesomeIcon icon={faCheckCircle} /> branded customer support
                            </li>
                        </ul>
                    </Col>
                
                </Row>
            </div>
        </>
    )
}

export default PricingPlan