import React from "react";
import "./pages.css"
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faCirclePlay, faMoneyBill1Wave, faChartLine, faShirt} from "@fortawesome/free-solid-svg-icons";
import logo from "../../Resources/HIVELOGO.png"
import ButtonHover from "../Inc/button-over";
import Hfc from "../Inc/hfc";
import Ppd from "../Inc/ppd";
import Pspp from "../Inc/pspp";
// import {ReactComponent  as slideShow} from "../../Resources/theHiveSlideShow(1).svg"

const Home = () =>{

    const pwa = {
        HIGHER_PROFITS: [
            "We offer some of the lowest prices in the industries because print providers continuously compete to win your business.",
            faMoneyBill1Wave
        ],
        ROBUST_SCALING: [
            "Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.",
            faChartLine
        ],
        BEST_SELECTION: [
            "With 600+ products and top-quality brand, you can choose the best products for your business.",
            faShirt
        ],
    }
    return(
        <Container>
            <Row className="home-top-section">
                <Col className="home-top-svg" sm={6}>
                    <img src={logo} alt="Illustrative iamge of The Hive" />
                    {/* <sld /> */}
                </Col>
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
            </Row>
            {/* PORPOSE OF WEB APPICATION */}
            <Row className="purposeofwebapp-section">
                {
                    Object.keys(pwa).map((val, idx)=>(
                       
                        <ButtonHover key={idx} icons={pwa[val][1]} 
                                    info={pwa[val][0]} val={val} alt={val}/>


                    ))
                }
            </Row>
            <Hfc />
            <Ppd />
            <Pspp />
        </Container>
    );
}

export default Home