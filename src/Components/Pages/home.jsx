import React from "react";
import "./pages.css"
import { Container, Row, Col, Button } from "react-bootstrap";
import topsvg from "../../Resources/Fashionblogging.gif"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import higheProfit from "../../Resources/higher-profits.svg"
import robustScale from "../../Resources/robust-scaling.svg" 
import bestselling from "../../Resources/9175330_6532.jpg"

const Home = () =>{
    const pwa = {
        HIGHER_PROFITS: [
            "We offer some of the lowest prices in the industries because print providers continuously compete to win your business.",
            higheProfit
        ],
        ROBUST_SCALING: [
            "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
            robustScale
        ],
        BEST_SELECTION: [
            "With 600+ products and top-quality brand, you can choose the best products for your business.",
            bestselling
        ],
    }
    return(
        <Container>
            <Row>
                <Col className="home-top-info" sm={6}>
                    <div className="home-top-info-position">
                        <h1>
                            Create and sell custom products
                        </h1>
                        <span>
                            <ul>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />{" "}
                                    Create and sell custom products
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />{" "}
                                    Introductory video of how products work.
                                </li>
                                <li>
                                    <FontAwesomeIcon icon={faCheck} />{" "}
                                    Animation design of user and products
                                </li>
                            </ul>
                        </span>
                        <div className="home-top-info-btn">
                            <Button variant="warning" className="me-20">Statr Selling</Button>
                            <Button variant="outline-warning">
                                <FontAwesomeIcon icon={faCirclePlay} className="fa-thin" />
                                How It Works?
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="home-top-svg" sm={6}>
                    <img src={topsvg} alt="Illustrative iamge of The Hive" />
                </Col>
            </Row>
            {/* PORPOSE OF WEB APPICATION */}
            <Row>
                {
                    Object.keys(pwa).map((val, idx)=>(
                        <Col key={idx}>
                            <div className="purposeofwebapp">
                                <img src={pwa[val][1]} alt={val} />
                                <h3> {val} </h3>
                                <p>
                                {pwa[val][0]}
                                </p> 
                            </div>
                        </Col>
                    ))
                }
            </Row>
            <Row>
                
            </Row>
        </Container>
    );
}

export default Home