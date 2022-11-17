import React from "react"
import "./inc.css"
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../Resources/HIVELOGO(2).png"
import footer_list from "./footer_list"
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter, FaPinterest, FaLinkedin } from "react-icons/fa";


const Footer =()=>{
    return(
        <Container>
            <Row className="footer-contain">
                <Col sm={12} className="footer-head">
                    <div className="footer-logo">
                        <img className="img" src={logo} alt="the hive logo" />
                    </div>
                    <div className="footer-socials">
                        <ul>
                            <li>
                                <a href="/">
                                    <FaFacebook color="#3b5998" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <FaWhatsapp color="#43d854"/>
                                </a>
                            </li>
                            <li>
                                 <a href="/">
                                    <FaInstagram color="#3f729b" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <FaTwitter color="#55acee" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <FaPinterest color="#bd081c" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <FaLinkedin color="#0077b5" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col sm={12} className="footer-body">
                    <Row>
                        {footer_list.map((val, idx)=>(
                            <Col key={idx} sm={3}>
                                {
                                    Object.keys(val).map((key, n)=>(
                                        <ul key={n}>
                                            <h6>{key.replace("_", " ")}</h6>
                                            {val[key].map((list, list_idx)=>(
                                                <li key={list_idx}>
                                                    <a href={`/${list}`}>
                                                        {list}
                                                    </a>
                                                </li>
                                            ) )}
                                        </ul>
                                    ))
                                }
                            </Col>
                        ))}
                    </Row>
                </Col>
                <Col sm={12} className="footer-foot">
                   <div className="footer-foot-body">
                        <div className="footer-footer-copy-info">
                                <p>Intellectual Property</p>
                                <p>PolicyTerms of Service</p>
                                <p>Privacy Policy</p>
                        </div>
                        <p>
                            © 2022 THE HIVE, Inc. All rights reserved.
                        </p> 
                   </div>
                </Col>
            </Row>
        </Container>
    );
}
export default Footer